using System;
using System.Collections.Generic;
using System.Linq;

namespace Test
{
    class Test
    {
        class SinhVien {
            public string HoTen {set; get;}
            public int NamSinh {set; get;}
            public string NoiSinh {set; get;}

        }



    interface IHinhHoc
    {
        public double 
    }
        static void Main(string[] args)
        {
            List<SinhVien> cacsinhvien = new List<SinhVien>{} {
                new SinhVien() {HoTen = "Tung", NamSinh = 2002, NoiSinh = "Quang Nam"}
                new SinhVien() {HoTen = "Tam", NamSinh = 2004, NoiSinh = "Quang Nam"}
                new SinhVien() {HoTen = "Tien", NamSinh = 20013, NoiSinh = "Quang Nam"}
            };


            var kqua = from sv in cacsinhvien
                        where sv.NamSinh <= 2001
                        select new {
                            Ten = sv.HoTen;
                            NoiS = sv.NoiSinh;
                        }
        }
    }
}