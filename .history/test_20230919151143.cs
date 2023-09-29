namespace Test
{
    class Test
    {
        class SinhVien {
            public string HoTen {set; get;}
            public int NamSinh {}
        }


        static void Main(string[] args)
        {
            var sanpham = new {
                Ten = "Iphone 8",
                Gia = 1000,
                NamSX = 2018
            };


            Console.Writeline(sanpham.Ten);
            Console.Writeline(sanpham.Gia);

        }
    }
}