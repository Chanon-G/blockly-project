Blockly.Arduino.dcmotor_config= function(block) {
    var pin = block.getFieldValue('PINOUT');
    // TODO: Assemble JavaScript into code variable.
    //define
    Blockly.Arduino.definitions_['define_dcmotor_config'] =                       
    '#define motorPin ' + pin + '\n';     
    // int motorPin = 3;

   // setup
   Blockly.Arduino.setups_['setup_dcmotor_config'] =
   '\n';
    

   //loop
var code = '// Motor will spin in full speed \n';
    code += 'digitalWrite(motorPin, HIGH);\n';  

//   Motor will spin in full speed
//   digitalWrite(motorPin, HIGH);

    return code;
  };