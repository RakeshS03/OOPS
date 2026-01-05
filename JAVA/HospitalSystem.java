// ABSTRACTION
interface Monitorable {
    void monitor();
}

// ABSTRACT CLASS 
abstract class MedicalDevice implements Monitorable {
    private String deviceId;
    private boolean poweredOn;

    //ENCAPSULATION 
    public MedicalDevice(String deviceId) {
        this.deviceId = deviceId;
        this.poweredOn = false;
    }

    public void powerOn() {
        poweredOn = true;
        System.out.println(deviceId + " powered ON");
    }

    public void powerOff() {
        poweredOn = false;
        System.out.println(deviceId + " powered OFF");
    }

    protected boolean isPoweredOn() {
        return poweredOn;
    }

    public String getDeviceId() {
        return deviceId;
    }

    // ABSTRACTION 
    public abstract void performDiagnosis();
}

// INHERITANCE
class HeartRateMonitor extends MedicalDevice {

    public HeartRateMonitor(String deviceId) {
        super(deviceId);
    }

    //POLYMORPHISM 
   
    public void monitor() {
        if (isPoweredOn()) {
            System.out.println("monitoring heart rate");
        } else {
            System.out.println("device is OFF");
        }
    }

   
    public void performDiagnosis() {
        System.out.println("Heart rate NORMAL");
    }
}

class Ventilator extends MedicalDevice {

    public Ventilator(String deviceId) {
        super(deviceId);
    }

  
    public void monitor() {
        if (isPoweredOn()) {
            System.out.println("Monitoring oxygen flow");
        } else {
            System.out.println("Ventilator is OFF");
        }
    }

   
    public void performDiagnosis() {
        System.out.println("Oxygen supply is STABLE");
    }
}


class HospitalSystem {

    public void operateDevice(MedicalDevice device) {
        device.powerOn();
        device.monitor();            
        device.performDiagnosis();   
        device.powerOff();
        
    }
}


public class SmartHospital {

    public static void main(String[] args) {

        MedicalDevice heartMonitor = new HeartRateMonitor("HR-101");
        MedicalDevice ventilator = new Ventilator("VENT-202");

        HospitalSystem system = new HospitalSystem();

        system.operateDevice(heartMonitor);
        system.operateDevice(ventilator);
    }
}
