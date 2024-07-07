function tampilkanForm() {
    const jenisZakat = document.getElementById('jenisZakat').value;
    const forms = document.querySelectorAll('.form-zakat');
    forms.forEach(form => form.style.display = 'none');
    
    if (jenisZakat === 'penghasilan') {
        document.getElementById('formPenghasilan').style.display = 'block';
    } else if (jenisZakat === 'perusahaan') {
        document.getElementById('formPerusahaan').style.display = 'block';
    } else if (jenisZakat === 'perdagangan') {
        document.getElementById('formPerdagangan').style.display = 'block';
    } else if (jenisZakat === 'emas') {
        document.getElementById('formEmas').style.display = 'block';
    }
}

function formatNumber(input) {
    const value = input.value.replace(/\D/g, '');
    input.value = new Intl.NumberFormat('id-ID').format(value);
}

function hitungZakatPenghasilan() {
    const penghasilanBulanan = document.getElementById('penghasilanBulanan').value.replace(/\D/g, '');
    const nishabBulanan = (85 / 12) * 1000000; // asumsi harga emas Rp. 1,000,000 per gram
    const zakat = penghasilanBulanan > nishabBulanan ? penghasilanBulanan * 0.025 : 0;
    const hasilPenghasilan = document.getElementById('hasilPenghasilan');
    if (zakat > 0) {
        hasilPenghasilan.innerHTML = `Total Zakat Penghasilan: Rp. ${new Intl.NumberFormat('id-ID').format(zakat)}`;
    } else {
        hasilPenghasilan.innerHTML = "Harta Anda belum masuk Nishab";
    }
}

function hitungZakatPerusahaan() {
    const asetPerusahaan = document.getElementById('asetPerusahaan').value.replace(/\D/g, '');
    const nishab = 85 * 1000000; // asumsi harga emas Rp. 1,000,000 per gram
    const zakat = asetPerusahaan > nishab ? asetPerusahaan * 0.025 : 0;
    const hasilPerusahaan = document.getElementById('hasilPerusahaan');
    if (zakat > 0) {
        hasilPerusahaan.innerHTML = `Total Zakat Perusahaan: Rp. ${new Intl.NumberFormat('id-ID').format(zakat)}`;
    } else {
        hasilPerusahaan.innerHTML = "Harta Anda belum masuk Nishab";
    }
}

function hitungZakatPerdagangan() {
    const nilaiPerdagangan = document.getElementById('nilaiPerdagangan').value.replace(/\D/g, '');
    const nishab = 85 * 1000000; // asumsi harga emas Rp. 1,000,000 per gram
    const zakat = nilaiPerdagangan > nishab ? nilaiPerdagangan * 0.025 : 0;
    const hasilPerdagangan = document.getElementById('hasilPerdagangan');
    if (zakat > 0) {
        hasilPerdagangan.innerHTML = `Total Zakat Perdagangan: Rp. ${new Intl.NumberFormat('id-ID').format(zakat)}`;
    } else {
        hasilPerdagangan.innerHTML = "Harta Anda belum masuk Nishab";
    }
}

function hitungZakatEmas() {
    const nilaiEmas = document.getElementById('nilaiEmas').value.replace(/\D/g, '');
    const nishab = 85 * 1000000; // asumsi harga emas Rp. 1,000,000 per gram
    const zakat = nilaiEmas > nishab ? nilaiEmas * 0.025 : 0;
    const hasilEmas = document.getElementById('hasilEmas');
    if (zakat > 0) {
        hasilEmas.innerHTML = `Total Zakat Emas: Rp. ${new Intl.NumberFormat('id-ID').format(zakat)}`;
    } else {
        hasilEmas.innerHTML = "Harta Anda belum masuk Nishab";
    }
}
