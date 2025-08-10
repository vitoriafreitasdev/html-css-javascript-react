
import admin from 'firebase-admin'

export async function authenticateToken(request, response, next) {
    const jwt = request.headers.authorization
        if(!jwt){
            response.status(401).json({message: "Usuário não autorizado"})
            return
        }
        let decodedIdToken = ""
        try {
            decodedIdToken =  await admin.auth().verifyIdToken(jwt, true)
        } catch (error) {
            response.status(401).json({message: "Usuário não autorizado"})
            return
        }
    
        request.user = {
            uid: decodedIdToken.sub
        }
        next()
}