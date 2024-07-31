import React from 'react';

const Promotion = () => {
  return (
    <div className="home-page">
      <h2>Selamat Datang di Toko Online Kami!</h2>
      <p>Temukan berbagai produk unggulan kami dengan kualitas terbaik dan harga yang terjangkau.</p>
      <div className="highlights">
        <div className="highlight-item">
          <h3>Promo Diskon</h3>
          <p>Dapatkan diskon hingga 50% untuk semua produk!</p>
        </div>
        <div className="highlight-item">
          <h3>Pengiriman Gratis</h3>
          <p>Nikmati pengiriman gratis untuk setiap pembelian di atas Rp 500.000.</p>
        </div>
        <div className="highlight-item">
          <h3>Pembayaran Aman</h3>
          <p>Kami menjamin keamanan dalam setiap transaksi yang Anda lakukan.</p>
        </div>
      </div>
    </div>
  );
}


export default Promotion;
