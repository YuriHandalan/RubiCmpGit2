-- BUAT TABLE

CREATE TABLE jurusan (
    iDJurusan varchar(10) primary key not null,
    namaJurusan varchar(100) not null;
);

CREATE TABLE mahasiswa (
    nim character(3) primary key not null,
    nama varchar(100) not null,
    alamat text not null,
    iDJurusan varchar(10) not null,
    foreign key(iDJurusan) references jurusan (iDJurusan);
);

CREATE TABLE dosen (
    nip character(3) primary key not null,
    nama varchar(100) not null;
);

CREATE TABLE matakuliah (
    IDMatkul character(3) primary key not null ,
    nmMatkul varchar(100) not null ,
    sks integer (5) not null;  
);

CREATE TABLE enroll (
    id_nilai integer primary key autoincrement,
    nilai varchar(5) not null ,
    nim character(3) not null,
    id_Matkul character(3) not null,
    nip character(3) not null ,
    foreign key (nim) references mahasiswa(nim),
    foreign key (id_Matkul) references matakuliah(IDMatkul),
    foreign key (nip) references dosen(nip);
);


-- INSERT ISI TABLE

insert into jurusan(iDJurusan,namaJurusan) values
('P01','TEKNIK INFORMATIKA'),
('P02','TEKNIK HADIST');

insert into mahasiswa(nim,nama,alamat,iDJurusan) values
('111','YURIHAN','CIAMIS','P01'),
('112','DASMAN','BANDUNG','P02');

insert into matakuliah(IDMatkul,nmMatkul,sks)values
('M01','PEMROGRAMAN','3'),
('M02','TAFSIR JAVA','3');

insert into dosen(nip,nama) values
('D01','IQBAL'),
('D02','FAUZI');

insert into enroll(nim,id_Matkul,nip,nilai)values
('111','M01','D01','A+'),
('111','M02','D02','B-'),
('112','M01','D01','A-'),
('112','M02','D02','B+');