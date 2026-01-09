#include <stdio.h>


   //ABSTRACT BASE "CLASS"

typedef struct Device {
    void (*powerOn)(struct Device *);
    void (*operate)(struct Device *);
    void (*powerOff)(struct Device *);
} Device;

typedef struct {
    Device base;   // inheritance
    int speed;     // encapsulated data
} Fan;

void fanPowerOn(Device *d) {
    printf("powered ON\n");
}

void fanOperate(Device *d) {
    Fan *fan = (Fan *)d;
    printf("running at speed %d\n", fan->speed);
}

void fanPowerOff(Device *d) {
    printf("powered OFF\n");
}

typedef struct {
    Device base;
    int intensity;
} Light;

void lightPowerOn(Device *d) {
    printf("powered ON\n");
}

void lightOperate(Device *d) {
    Light *light = (Light *)d;
    printf("intensity %d\n", light->intensity);
}

void lightPowerOff(Device *d) {
    printf("powered OFF\n");
}


   //POLYMORPHISM
  
void operateDevice(Device *device) {
    device->powerOn(device);
    device->operate(device);
    device->powerOff(device);
}


int main() {

    Fan fan = {
        .base = { fanPowerOn, fanOperate, fanPowerOff },
        .speed = 3
    };

    Light light = {
        .base = { lightPowerOn, lightOperate, lightPowerOff },
        .intensity = 75
    };

    operateDevice((Device *)&fan);
    operateDevice((Device *)&light);

    return 0;
}
