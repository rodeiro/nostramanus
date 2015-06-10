#include <Servo.h>

int sensorPin = 0;
int servoPin = 7;

int inputReading;
int sensorHighThreshold = 30;
int sensorLowThreshold = 5;

Servo handServo;
// Servo position in degrees.
int position = 0;

void setup()
{
  // Init the servo output.
  pinMode(servoPin, OUTPUT);
  handServo.attach(servoPin);

  // Init sensor input.
  inputReading = 0;
  pinMode(sensorPin, INPUT);
}

void moveServo(int pos)
{
  handServo.write(pos);

  // Wait for the servo to move.
  delay(300);
}

void loop()
{
  // Read the input value.
  inputReading = analogRead(sensorPin);

  if (inputReading >= sensorHighThreshold) {
    if (position != 180) {
      position = 180;
      moveServo(position);
    }
  } else {
    if (inputReading < sensorLowThreshold) {
      if (position != 0) {
        position = 0;
        moveServo(position);
      }
    }
  }

  delay(50);
}
