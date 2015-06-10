#include <Servo.h>

int servoPin = 7;

Servo handServo;
int position = 0;

void setup()
{
  pinMode(servoPin, OUTPUT);
  handServo.attach(servoPin);

}

void moveServo(int pos)
{
  handServo.write(pos);
  delay(400);
}

void loop()
{
    if (position != 180) {
      position = 180;
      moveServo(position);
    }
   else {
   
      if (position != 0) {
        position = 0;
        moveServo(position);
      }
    
  }

  delay(5000);
}
