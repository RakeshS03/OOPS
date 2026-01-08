
// ABSTRACTION
interface Monitorable {
  monitor(): void;
}
// ABSTRACT CLASS
abstract class MedicalDevice implements Monitorable {

  // ENCAPSULATION
  private deviceId: string;
  private poweredOn: boolean;

  constructor(deviceId: string) {
    this.deviceId = deviceId;
    this.poweredOn = false;
  }

  public powerOn(): void {
    this.poweredOn = true;
    console.log(`${this.deviceId} powered ON`);
  }

  public powerOff(): void {
    this.poweredOn = false;
    console.log(`${this.deviceId} powered OFF`);
  }

  protected isPoweredOn(): boolean {
    return this.poweredOn;
  }

  public getDeviceId(): string {
    return this.deviceId;
  }

  // ABSTRACTION
  abstract performDiagnosis(): void;
  abstract monitor(): void;
}
// INHERITANCE + POLYMORPHISM

class HeartRateMonitor extends MedicalDevice {

  constructor(deviceId: string) {
    super(deviceId);
  }

  // POLYMORPHISM
  public monitor(): void {
    if (this.isPoweredOn()) {
      console.log("Monitoring heart rate");
    } else {
      console.log("Device is OFF");
    }
  }

  public performDiagnosis(): void {
    console.log("Heart rate NORMAL");
  }
}
// INHERITANCE + POLYMORPHISM
class Ventilator extends MedicalDevice {

  constructor(deviceId: string) {
    super(deviceId);
  }

  public monitor(): void {
    if (this.isPoweredOn()) {
      console.log("Monitoring oxygen flow");
    } else {
      console.log("Ventilator is OFF");
    }
  }

  public performDiagnosis(): void {
    console.log("Oxygen supply is STABLE");
  }
}
// SYSTEM CLASS (POLYMORPHISM IN ACTION)
class HospitalSystem {

  public operateDevice(device: MedicalDevice): void {
    device.powerOn();
    device.monitor();           
    device.performDiagnosis();  
    device.powerOff();
  }
}
class SmartHospital {

  public static main(): void {

    const heartMonitor: MedicalDevice =
      new HeartRateMonitor("HR-101");

    const ventilator: MedicalDevice =
      new Ventilator("VENT-202");

    const system = new HospitalSystem();

    system.operateDevice(heartMonitor);
    system.operateDevice(ventilator);
  }
}
SmartHospital.main();
