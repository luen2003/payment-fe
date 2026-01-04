// src/components/PaymentQRCode.jsx
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const PaymentQRCode = ({ qrCode, checkoutUrl }) => {
  if (!qrCode) return <p>Chưa tạo giao dịch</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Quét QR code để thanh toán</h3>
      <QRCodeCanvas 
        value={qrCode} 
        size={256} 
        level="H" 
        includeMargin={true} 
      />
      <p style={{ marginTop: '10px' }}>
        Hoặc <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">Thanh toán trực tiếp</a>
      </p>
    </div>
  );
};

export default PaymentQRCode;
