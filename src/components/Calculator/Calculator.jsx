import React, {useState } from 'react'
import { useSumHook } from '../../hooks/useSumHook'
import {
  View,
  Results,
  CalButton
} from './calculator_styles'
import {
  Holder,
  Section,
} from '../global_styles'

const Calculator = () => {
  const { value, updateValue,resetValue } = useSumHook()

  const [amount, setAmount] = useState("")

  const handleChangeSum = (e) => {
    const regex = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
    let value = parseInt(e.target.value)

    if(regex.test(value)){
   
      if (value > -1) {
        setAmount(parseInt(value))
      }else{
        setAmount()
      }
      
    }else{
      setAmount("")
    }
  
    

  }

  const UpdateValue = (type) => {

   
      let obj = {
        type,
        amount,
      }
      updateValue(obj)
   
      setAmount("")

     
  }

  const Clear = () => {
    resetValue()
    setAmount("")
  }
  

  return (
    <Holder
      $flex={true}
      $flexdir='column'
      $width={80}
      $wrap={true}
      $margin='80px auto'
      $justify="center"
      $align="center"
    >
      <Section
        $border='2px #003562 solid'
        $margin='10px 0px'
        $flex={true}
        $flexdir='column'
        $justify="center"
        $align="center"
        $wrap={true}
      >
        <View
        type='text'
        value={amount}
        $weight="bold"
        $size='1.5em' 
        $color='#003562'
        $padding="20px 30px"
        onChange={(e) => { handleChangeSum(e) }} 
        />

        <Holder
          $flex={true}
          $flexdir='row'
          $wrap={true}
          $justify="center"
          $margin='20px -10px 0px -10px'
          $align="center"
        >
          <CalButton
            onClick={(e) => { UpdateValue(e.target.value) }}
            value="+"
            $padding="22px 35px"
            $bg="#003562"
            $margin="2.5px"
            $color='white'
            $align="center"
          >+</CalButton>

          <CalButton
            onClick={(e) => { UpdateValue(e.target.value) }}
            value="-"
            $padding="22px 35px"
            $margin="2.5px"
            $color='white'
            $align="center">-</CalButton>

          <CalButton
            onClick={(e) => { UpdateValue(e.target.value) }}
            value="*"
            $padding="22px 35px"
            $margin="2.5px"
            $color='white'
            $align="center">×</CalButton>

          <CalButton
            onClick={(e) => { UpdateValue(e.target.value) }}
            value="/"
            $padding="22px 35px"
            $margin="2.5px"
            $color='white'
            $align="center">÷</CalButton>

            <CalButton
            onClick={() => {Clear()}}
            value="/"
            $padding="22px 35px"
            $margin="2.5px"
            $color='white'
            $align="center">Clear</CalButton>
        </Holder>

      </Section>

      <Section
        $border='2px #003562 solid'
        $margin='10px 0px'
        $flex={true}
        $flexdir='column'
        $justify="center"
        $align="center"
      >

        <Results
        $size='2em'
        $weight="bold"
        $color='#003562'
        >
        {value}</Results>

        <Results
        $size='2em'
        $weight="bold"
        $color='#003562'
        >
        Result: {value}</Results>

      </Section>

    </Holder>
  )
}

export default Calculator