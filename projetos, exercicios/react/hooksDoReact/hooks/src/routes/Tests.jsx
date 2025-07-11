import React from 'react'
import HookUseReducerTest from '../componentsTest/HookUseReducerTest'
import HookUseEffectTest from '../componentsTest/HookUseEffectTest'
import {HookUseContextTest} from '../componentsTest/HookUseContextTest'
import HookUseRefTest from '../componentsTest/HookUseRefTest'
import HookUseCallbackTest from '../componentsTest/HookUseCallbackTest'
import HookUseMemoTest from '../componentsTest/HookUseMemoTest'

const Tests = () => {
  
  return (
    <div>
        
        <HookUseContextTest>
          <HookUseReducerTest/>
          <HookUseEffectTest/>
          <HookUseRefTest/>
          <HookUseCallbackTest/>
          <HookUseMemoTest/>
        </HookUseContextTest>
        
    </div>
  )
}

export default Tests