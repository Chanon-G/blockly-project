Blockly.Arduino.buzzer_config= function(block) {
    var pin = block.getFieldValue('PINOUT');
    // TODO: Assemble JavaScript into code variable.
    //define
    Blockly.Arduino.definitions_['define_buzzer_config'] =                       
    '#define BUZZER_PIN ' + pin + '\n';     
    // #define BUZZER_PIN 2

   // setup
   Blockly.Arduino.setups_['setup_buzzer_config'] =
   'pinMode(BUZZER_PIN,OUTPUT);\n';
    //    pinMode(BUZZER_PIN,OUTPUT);

   //loop
var code = '// Mute notifications \n';
    code += 'digitalWrite(BUZZER_PIN,HIGH);\n';  
    code += 'delay(1000);\n';
    code += '// Turn on notification \n';
    code += 'digitalWrite(BUZZER_PIN,LOW);\n';
    code += 'delay(1000);\n';

//ปิดเสียงเตือน
//   digitalWrite(BUZZER_PIN,HIGH);   
//   delay(1000);
//เปิดเสียงเตือน
//   digitalWrite(BUZZER_PIN,LOW);    
//   delay(1000);

    return code;
  };
