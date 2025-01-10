import React from "react";
import { jsPDF } from "jspdf";

const InvoicePDF = () => {
  const handleDownload = () => {
    const doc = new jsPDF("p", "mm", "a4"); // Portrait, millimeters, A4 size

    // Logo
    const logoBase64 = "/img/logo.jpg";
    doc.addImage(logoBase64, "JPG", 160, 10, 40, 20); // (x, y, width, height)

    // Invoice Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("INVOICE", 10, 30);

    // From Section
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("FROM:", 10, 40);
    doc.text("Your Company Name", 10, 45);
    doc.text("Address Line 1", 10, 50);
    doc.text("City, State, ZIP", 10, 55);

    // Invoice Details
    doc.text("INVOICE #:", 140, 40);
    doc.text("US-001", 170, 40);
    doc.text("INVOICE DATE:", 140, 45);
    doc.text("11/02/2023", 170, 45);
    doc.text("DUE DATE:", 140, 50);
    doc.text("26/02/2023", 170, 50);

    // Bill To Section
    doc.text("BILL TO:", 10, 70);
    doc.text("Client Name", 10, 75);
    doc.text("Client Address", 10, 80);
    doc.text("City, State, ZIP", 10, 85);

    // Table Header
    doc.setFont("helvetica", "bold");
    doc.text("QTY", 10, 100);
    doc.text("DESCRIPTION", 30, 100);
    doc.text("UNIT PRICE", 140, 100);
    doc.text("AMOUNT", 170, 100);
    doc.line(10, 102, 200, 102); // Horizontal line

    // Table Content
    doc.setFont("helvetica", "normal");
    let startY = 110;
    const items = [
      { qty: 1, desc: "Front and rear brake cables", unitPrice: 100.0, amount: 100.0 },
      { qty: 2, desc: "New set of pedal arms", unitPrice: 15.0, amount: 30.0 },
      { qty: 3, desc: "Labor (3 hrs)", unitPrice: 5.0, amount: 15.0 },
    ];
    items.forEach((item) => {
      doc.text(item.qty.toString(), 10, startY);
      doc.text(item.desc, 30, startY);
      doc.text(item.unitPrice.toFixed(2), 140, startY, { align: "right" });
      doc.text(item.amount.toFixed(2), 170, startY, { align: "right" });
      startY += 10;
    });

    // Totals
    doc.line(10, startY, 200, startY); // Horizontal line
    doc.setFont("helvetica", "bold");
    startY += 10;
    doc.text("Subtotal:", 140, startY);
    doc.text("145.00", 170, startY, { align: "right" });
    startY += 5;
    doc.text("Sales Tax (6.25%):", 140, startY);
    doc.text("9.06", 170, startY, { align: "right" });
    startY += 10;
    doc.setFontSize(16);
    doc.text("TOTAL:", 140, startY);
    doc.text("154.06", 170, startY, { align: "right" });

    // Footer
    startY += 20;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("TERMS & CONDITIONS", 10, startY);
    doc.text("Payment is due within 15 days.", 10, startY + 5);
    doc.text("Please make checks payable to: Your Company Name", 10, startY + 10);

    // Save PDF
    doc.save("Invoice.pdf");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Download Invoice</h2>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default InvoicePDF;
