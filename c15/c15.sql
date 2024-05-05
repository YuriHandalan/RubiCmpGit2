-- no 1
select * from mahasiswa JOIN jurusan USING(IDJurusan);

-- no 2
select * from mahasiswa where usia < 20;

-- no 3
select nama, nilai, nmMatkul from enroll join matakuliah ON enroll.id_Matkul = IDMatkul join mahasiswa using(nim) where nilai <='B';

-- no 4
select nama, sks from enroll join mahasiswa using(nim) join matakuliah ON enroll.id_Matkul = IDMatkul where sks>'10';

-- no 5
select nim, nama, nmMatkul from mahasiswa join enroll using (nim) join matakuliah on enroll.id_Matkul = IDMatkul where nmMatkul = 'DATA MINING';

-- no 6
select dosen.nip, dosen.nama, count(distinct enroll.nim)as total_mahasiswa from dosen join enroll using(nip) group by dosen.nip;

-- no 7
select * from mahasiswa order by usia asc;

-- no 8
select * from enroll join mahasiswa on enroll.nim=mahasiswa.nim join dosen on enroll.nip=dosen.nip join jurusan on enroll.iDJurusan=jurusan.iDJurusan where nilai>='D';