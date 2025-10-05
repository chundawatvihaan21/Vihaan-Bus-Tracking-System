import { useState } from "react";
import { MapPin, Bus, Users } from "lucide-react";

export default function Home() {
  const [busNo, setBusNo] = useState("");
  const [students, setStudents] = useState("");
  const [kms, setKms] = useState("");
  const [records, setRecords] = useState([]);

  const addRecord = () => {
    if (!busNo || !students || !kms) return;
    const newRecord = {
      id: Date.now(),
      busNo,
      students,
      kms,
    };
    setRecords([newRecord, ...records]);
    setBusNo("");
    setStudents("");
    setKms("");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", color: "#eab308" }}>
          🚍 Vihaan Bus Tracking System
        </h1>
        <p style={{ color: "#555" }}>Smart Tracking, Safe Journey</p>
      </header>

      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <input
          placeholder="Enter Bus Number"
          value={busNo}
          onChange={(e) => setBusNo(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="No. of Students Present"
          type="number"
          value={students}
          onChange={(e) => setStudents(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Kilometers Covered (Morning + Evening)"
          type="number"
          value={kms}
          onChange={(e) => setKms(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addRecord} style={buttonStyle}>
          Save Record
        </button>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "500px", margin: "30px auto" }}>
        {records.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666" }}>
            No records yet.
          </p>
        ) : (
          records.map((rec) => (
            <div
              key={rec.id}
              style={{
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ color: "#eab308", fontSize: "18px" }}>
                <Bus size={18} style={{ display: "inline", marginRight: 5 }} />
                Bus {rec.busNo}
              </h2>
              <p>
                <Users size={16} style={{ display: "inline", marginRight: 5 }} />
                Students: {rec.students}
              </p>
              <p>
                <MapPin size={16} style={{ display: "inline", marginRight: 5 }} />
                KMs: {rec.kms}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#eab308",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
