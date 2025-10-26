// js/data.js

// --- DỮ LIỆU 20 SẢN PHẨM (ĐÃ THÊM MÔ TẢ CHI TIẾT) ---
const productData = [
    // 5 Sofa
    {
        id: 'sf001',
        category: 'sofa',
        name: 'Sofa Băng Vải Nỉ',
        price: 12500000,
        img: 'https://dogonoithathta.com/uploads/images/2021/06/1622540028-single_product1-5608b350d02581c00442afa800c2caad513467master.jpg',
        summary: 'Thiết kế hiện đại, chất liệu vải nỉ cao cấp, êm ái.',
        description: `
            <p>Sofa băng vải nỉ là lựa chọn hoàn hảo cho phòng khách hiện đại. Khung sườn làm từ gỗ sồi tự nhiên đã qua xử lý chống mối mọt, cong vênh.</p>
            <ul>
                <li><strong>Chất liệu:</strong> Vải nỉ cao cấp nhập khẩu, thoáng khí.</li>
                <li><strong>Đệm mút:</strong> D40 đàn hồi, chống xẹp lún.</li>
                <li><strong>Kích thước (DxRxC):</strong> 220cm x 85cm x 80cm.</li>
            </ul>
        `
    },
    {
        id: 'sf002',
        category: 'sofa',
        name: 'Sofa Góc Chữ L Hiện Đại',
        price: 21000000,
        img: 'https://bizweb.dktcdn.net/100/429/325/products/155.png?v=1626936867420',
        summary: 'Tối ưu không gian phòng khách, khung gỗ sồi chắc chắn.',
        description: `
            <p>Tối ưu không gian phòng khách với sofa góc chữ L. Thiết kế cho phép bạn tận dụng tối đa góc phòng, tạo không gian quây quần ấm cúng.</p>
            <ul>
                <li><strong>Chất liệu:</strong> Vải bố cao cấp, chống bám bụi.</li>
                <li><strong>Kích thước (DxRxC):</strong> 2.6m x 1.6m x 0.8m.</li>
                <li><strong>Bảo hành:</strong> 3 năm cho khung và đệm.</li>
            </ul>
        `
    },
    {
        id: 'sf003',
        category: 'sofa',
        name: 'Sofa Đơn Armchair Thư Giãn',
        price: 4800000,
        img: 'https://product.hstatic.net/1000341603/product/ghe-sofa-don-armchair-go-soi-may-nem-vai_439ca858c1df4de4a33238e460dea0ea_master.jpg',
        summary: 'Ghế bành thư giãn đọc sách, đệm mút D40 đàn hồi.',
        description: `
            <p>Chiếc ghế armchair này là điểm nhấn hoàn hảo cho góc đọc sách hoặc phòng ngủ. Thiết kế cong thái học ôm trọn cơ thể, giúp bạn thư giãn tối đa.</p>
            <ul>
                <li><strong>Khung:</strong> Gỗ tần bì tự nhiên.</li>
                <li><strong>Đệm:</strong> Mút D40 bọc vải dệt kim thoáng mát.</li>
                <li><strong>Màu sắc:</strong> Vàng kem, Xám nhạt, Xanh rêu.</li>
            </ul>
        `
    },
    {
        id: 'sf004',
        category: 'sofa',
        name: 'Sofa Da Bò Cao Cấp',
        price: 35000000,
        img: 'https://dreamhouse.com.vn/wp-content/uploads/2020/10/sofa-vang-da-bo-cao-cap-sf7869-tile.jpg',
        summary: 'Da bò thật nhập khẩu, mang lại vẻ đẹp sang trọng.',
        description: `
            <p>Đẳng cấp và sang trọng là những gì sofa da bò thật mang lại. Bề mặt da mềm mại, mát mẻ vào mùa hè và ấm áp vào mùa đông.</p>
            <ul>
                <li><strong>Chất liệu:</strong> 100% da bò thật nhập khẩu từ Ý.</li>
                <li><strong>Khung:</strong> Gỗ thông sấy khô, chịu lực tốt.</li>
                <li><strong>Bảo hành:</strong> 5 năm cho da và khung.</li>
            </ul>
        `
    },
    {
        id: 'sf005',
        category: 'sofa',
        name: 'Ghế Đôn Tròn Vải Nhung',
        price: 1200000,
        img: 'https://ghevanphong247.com/wp-content/uploads/2024/12/ghe-don-boc-vai-nhung-pink-kg-274a-3.png',
        summary: 'Nhỏ gọn, tiện lợi, chất liệu vải nhung mềm mịn.',
        description: `
            <p>Một điểm nhấn trang trí nhỏ gọn nhưng đầy phong cách. Có thể dùng làm ghế ngồi, gác chân, hoặc bàn trà phụ.</p>
            <ul>
                <li><strong>Chất liệu:</strong> Vải nhung cao cấp, chân kim loại mạ vàng.</li>
                <li><strong>Kích thước:</strong> Đường kính 40cm, Cao 45cm.</li>
            </ul>
        `
    },
    // 5 Bàn
    {
        id: 'ban001',
        category: 'ban',
        name: 'Bàn Ăn Gỗ Sồi 6 Ghế',
        price: 15000000,
        img: 'https://tongkhonoithatgiare.com/data/product/ban_an_6_ghe_go_soi_nga_nk_cp%20(4).jpg',
        summary: 'Bộ bàn ăn gia đình, gỗ sồi tự nhiên, bền bỉ.',
        description: `
            <p>Bộ bàn ăn gia đình ấm cúng, thiết kế chắc chắn với 100% gỗ sồi tự nhiên. Các góc cạnh được bo tròn an toàn cho trẻ nhỏ.</p>
            <ul>
                <li><strong>Bao gồm:</strong> 1 bàn (1.6m) và 6 ghế ăn bọc nệm.</li>
                <li><strong>Chất liệu:</strong> Gỗ sồi đã qua xử lý.</li>
            </ul>
        `
    },
    {
        id: 'ban002',
        category: 'ban',
        name: 'Bàn Trà Mặt Đá Tròn',
        price: 3500000,
        img: 'https://bizweb.dktcdn.net/100/512/506/products/ban-tra-tron-mat-da-bt16.jpg?v=1726054584173',
        summary: 'Mặt đá phiến cao cấp, chống ố, chống xước.',
        description: `
            <p>Bàn trà đôi với thiết kế lồng ghép thông minh, tiết kiệm diện tích. Mặt đá phiến chống xước, chống ố, dễ dàng vệ sinh.</p>
            <ul>
                <li><strong>Chất liệu:</strong> Mặt đá phiến, chân thép sơn tĩnh điện.</li>
                <li><strong>Kích thước:</strong> Bàn lớn D70cm, Bàn nhỏ D50cm.</li>
            </ul>
        `
    },
    {
        id: 'ban003',
        category: 'ban',
        name: 'Bàn Làm Việc Tối Giản',
        price: 2800000,
        img: 'https://hoaphat.net/images/upload/image/202304/tim-hieu-chi-tiet-ve-ban-lam-viec-toi-gian-1.jpg',
        summary: 'Thiết kế thông minh, có ngăn kéo lưu trữ tiện lợi.',
        description: `
            <p>Góc làm việc gọn gàng và đầy cảm hứng với bàn làm việc tối giản. Thiết kế chân sắt thanh mảnh nhưng cực kỳ chắc chắn.</p>
            <ul>
                <li><strong>Kích thước:</strong> 1.2m x 0.6m x 0.75m.</li>
                <li><strong>Tiện ích:</strong> 2 ngăn kéo ray trượt giảm chấn.</li>
                <li><strong>Chất liệu:</strong> Gỗ MDF lõi xanh chống ẩm, chân sắt.</li>
            </ul>
        `
    },
    {
        id: 'ban004',
        category: 'ban',
        name: 'Bàn Bên Sofa (Side Table)',
        price: 1100000,
        img: 'https://homeoffice.com.vn/images/detailed/48/ban-ben-sofa-mat-da-khung-sat-1.jpg',
        summary: 'Bàn trà phụ nhỏ gọn, khung kim loại sơn tĩnh điện.',
        description: `
            <p>Bàn bên sofa (side table) vô cùng tiện lợi để đặt đèn, sách, hoặc tách trà. Thiết kế tối giản, dễ dàng di chuyển.</p>
            <ul>
                <li><strong>Kích thước:</strong> 50cm x 50cm x 55cm.</li>
                <li><strong>Thiết kế:</strong> Tối giản, mặt bàn gỗ, khung kim loại.</li>
            </ul>
        `
    },
    {
        id: 'ban005',
        category: 'ban',
        name: 'Bàn Trang Điểm Kèm Gương',
        price: 4200000,
        img: 'https://product.hstatic.net/1000078439/product/ban-trang-diem-go-mini_339a237a994a4c16942e2bec6abdb477_a6abcaf59b194affb930caeffb993f07.jpg',
        summary: 'Gương LED cảm ứng, nhiều ngăn chứa mỹ phẩm.',
        description: `
            <p>Góc làm đẹp hoàn hảo cho phái nữ. Bàn trang điểm tích hợp gương LED cảm ứng 3 chế độ màu (trắng, vàng, trung tính).</p>
            <ul>
                <li><strong>Chất liệu:</strong> Gỗ MDF phủ melamine.</li>
                <li><strong>Gương:</strong> Tích hợp LED 3 màu, điều khiển cảm ứng.</li>
                <li><strong>Lưu trữ:</strong> 3 ngăn kéo rộng rãi.</li>
            </ul>
        `
    },
    // 5 Ghế
    {
        id: 'ghe001',
        category: 'ghe',
        name: 'Ghế Ăn Bọc Nệm',
        price: 1300000,
        img: 'https://homeoffice.com.vn/images/detailed/99/ghe-an-boc-nem-chan-sat-cao-cap-11.jpg',
        summary: 'Ghế ăn bọc da PU, dễ dàng vệ sinh, chân sắt.',
        description: `
            <p>Ghế ăn bọc da PU cao cấp mang lại cảm giác ngồi êm ái và dễ dàng vệ sinh khi dính bẩn. Thiết kế cong nhẹ hỗ trợ lưng.</p>
            <ul>
                <li><strong>Chất liệu:</strong> Da PU, nệm mút, chân sắt sơn tĩnh điện.</li>
                <li><strong>Màu sắc:</strong> Kem, Nâu, Xám.</li>
            </ul>
        `
    },
    {
        id: 'ghe002',
        category: 'ghe',
        name: 'Ghế Văn Phòng Ergonomic',
        price: 3900000,
        img: 'https://noithatdongian.com.vn/images/detailed/6/Ghe-ergonomic-cong-thai-hoc-ZERC07-01.jpg?t=1641876238',
        summary: 'Thiết kế công thái học, hỗ trợ cột sống, lưới thoáng khí.',
        description: `
            <p>Bảo vệ sức khỏe cột sống của bạn với ghế Ergonomic. Thiết kế công thái học hỗ trợ đường cong tự nhiên của lưng, giảm đau mỏi khi ngồi lâu.</p>
            <ul>
                <li><strong>Tính năng:</strong> Ngả lưng 135 độ, tựa đầu điều chỉnh, tay vịn 3D.</li>
                <li><strong>Chất liệu:</strong> Lưới thoáng khí, chân hợp kim nhôm.</li>
            </ul>
        `
    },
    {
        id: 'ghe003',
        category: 'ghe',
        name: 'Ghế Bành Thư Giãn Đọc Sách',
        price: 5500000,
        img: 'https://file.hstatic.net/1000072882/file/cl1214-p-ghe-sofa-doc-sach-thu-gian-mau-cam-dat_bf0bc0112f734d8386dfd8e24c51771b_grande.png',
        summary: 'Kiểu dáng Bắc Âu, thư thái, đệm dày êm ái.',
        description: `
            <p>Thư giãn tuyệt đối với ghế bành phong cách Bắc Âu. Đệm ngồi dày và lưng tựa cao mang lại cảm giác nâng đỡ và thoải mái.</p>
            <ul>
                <li><strong>Phong cách:</strong> Scandinavian (Bắc Âu).</li>
                <li><strong>Chất liệu:</strong> Vải bố, chân gỗ sồi tự nhiên.</li>
            </ul>
        `
    },
    {
        id: 'ghe004',
        category: 'ghe',
        name: 'Ghế Quầy Bar Chân Cao',
        price: 1800000,
        img: 'https://homeoffice.com.vn/images/detailed/7/ghe-bar-ngoi-cao-chan-go-soi-1.jpg',
        summary: 'Thiết kế thanh lịch, phù hợp cho đảo bếp, quầy bar.',
        description: `
            <p>Phù hợp cho không gian đảo bếp hiện đại hoặc quầy bar gia đình. Thiết kế thanh lịch, có thể nâng hạ độ cao linh hoạt.</p>
            <ul>
                <li><strong>Điều chỉnh:</strong> Có thể nâng hạ độ cao từ 60cm - 80cm.</li>
                <li><strong>Chất liệu:</strong> Yên bọc da, chân thép mạ chrome.</li>
            </ul>
        `
    },
    {
        id: 'ghe005',
        category: 'ghe',
        name: 'Ghế Đẩu Gỗ Tự Nhiên',
        price: 750000,
        img: 'https://haydecor.com/wp-content/uploads/2024/05/ghe-dau-ARONE-4.jpg',
        summary: 'Gỗ sồi nguyên khối, vân gỗ đẹp, chắc chắn.',
        description: `
            <p>Ghế đẩu đa năng với thiết kế mộc mạc, tinh tế. Được làm từ 100% gỗ sồi nguyên khối, giữ trọn vẻ đẹp của vân gỗ tự nhiên.</p>
            <ul>
                <li><strong>Chất liệu:</strong> 100% gỗ sồi.</li>
                <li><strong>Ứng dụng:</strong> Đa năng, có thể làm ghế ngồi, kệ trang trí.</li>
            </ul>
        `
    },
    // 5 Giường
    {
        id: 'giuong001',
        category: 'giuong',
        name: 'Giường Ngủ Gỗ Sồi 1m8',
        price: 9500000,
        img: 'https://givehome.com.vn/wp-content/uploads/2024/10/Giuong-go-soi-nga-1m8%C3%972m-cho-gia-dinh.jpg',
        summary: 'Giường ngủ cỡ Queen, gỗ sồi nhập khẩu, ấm cúng.',
        description: `
            <p>Giường ngủ gỗ sồi mang lại cảm giác ấm cúng và gần gũi cho phòng ngủ của bạn. Thiết kế tối giản, tập trung vào vẻ đẹp của vân gỗ.</p>
            <ul>
                <li><strong>Kích thước:</strong> 1.8m x 2.0m (Queen size).</li>
                <li><strong>Chất liệu:</strong> Gỗ sồi nhập khẩu.</li>
            </ul>
        `
    },
    {
        id: 'giuong002',
        category: 'giuong',
        name: 'Giường Ngủ Bọc Nệm Nhung',
        price: 11200000,
        img: 'https://www.topsofa.vn/wp-content/uploads/2024/10/giuong-ngu-ts647-3.jpg',
        summary: 'Thiết kế sang trọng, đầu giường bọc nhung êm ái.',
        description: `
            <p>Mang lại vẻ đẹp sang trọng và mềm mại cho phòng ngủ. Đầu giường bọc nệm nhung cao, tạo cảm giác êm ái khi tựa lưng đọc sách.</p>
            <ul>
                <li><strong>Chất liệu:</strong> Vải nhung cao cấp, khung gỗ thông.</li>
                <li><strong>Kích thước:</strong> 1.6m x 2.0m (King size).</li>
            </ul>
        `
    },
    {
        id: 'giuong003',
        category: 'giuong',
        name: 'Giường Thông Minh Có Ngăn Kéo',
        price: 14000000,
        img: 'https://product.hstatic.net/200000539781/product/13_57259a19efea43ec87481d45f2bf76db.jpg',
        summary: 'Tích hợp ngăn kéo lưu trữ chăn màn, tiết kiệm diện tích.',
        description: `
            <p>Giải pháp tối ưu cho phòng ngủ có diện tích nhỏ. Giường tích hợp 2 ngăn kéo lớn bên hông, giúp bạn lưu trữ chăn màn, quần áo trái mùa.</p>
            <ul>
                <li><strong>Tính năng:</strong> 2 ngăn kéo lớn, ray trượt giảm chấn.</li>
                <li><strong>Chất liệu:</strong> Gỗ MDF lõi xanh chống ẩm.</li>
            </ul>
        `
    },
    {
        id: 'giuong004',
        category: 'giuong',
        name: 'Giường Tầng Trẻ Em',
        price: 8300000,
        img: 'https://gotrangtri.vn/wp-content/uploads/2024/04/avar-mau-giuong-tang-cho-tre-em.jpg',
        summary: 'Giải pháp cho phòng ngủ nhỏ, an toàn cho bé.',
        description: `
            <p>An toàn và tiện lợi cho phòng của bé. Thiết kế giường tầng giúp tiết kiệm không gian, với thanh chắn cao và cầu thang chắc chắn.</p>
            <ul>
                <li><strong>Chất liệu:</strong> Gỗ thông tự nhiên.</li>
                <li><strong>Kích thước:</strong> 1.0m (trên) và 1.2m (dưới).</li>
            </ul>
        `
    },
    {
        id: 'giuong005',
        category: 'giuong',
        name: 'Tủ Đầu Giường (Tab)',
        price: 1600000,
        img: 'https://noithatdailoi.com/wp-content/uploads/Tab-dau-giuong-thong-minh-3-ngan.jpg',
        summary: 'Tab đầu giường 2 ngăn kéo, đồng bộ với giường ngủ.',
        description: `
            <p>Đồng bộ không gian phòng ngủ với tủ đầu giường. Thiết kế 2 ngăn kéo nhỏ gọn, tiện lợi để đèn ngủ, sạc điện thoại và sách.</p>
            <ul>
                <li><strong>Chất liệu:</strong> Gỗ MDF phủ melamine.</li>
                <li><strong>Kích thước:</strong> 40cm x 35cm x 50cm.</li>
            </ul>
        `
    }
];

// --- DỮ LIỆU 3 TIN TỨC (Giữ nguyên) ---
const newsData = [
    {
        id: 'tt001',
        category: 'XU HƯỚNG',
        title: '5 Xu Hướng Nội Thất Lên Ngôi 2026',
        summary: 'Nội thất tối giản (Minimalism) tiếp tục giữ vững vị thế, bên cạnh đó là sự trỗi dậy của phong cách Japandi (kết hợp Nhật Bản và Scandinavia)...',
        img: 'https://bizweb.dktcdn.net/100/467/070/files/xu-huong-noi-that-2025-anthinhtienplastic-6-e4e886a7-4636-41e6-9ac3-9ed8fd07a38e.jpg?v=1728535045363',
        content: `
            <p>Năm 2026 chứng kiến sự lên ngôi của các vật liệu tự nhiên và bền vững. Khách hàng ngày càng ưa chuộng các thiết kế thông minh, đa công năng...</p>
            <p><strong>1. Phong cách Japandi:</strong> Sự kết hợp hoàn hảo giữa nét mộc mạc của Scandinavia và sự thanh lịch, tối giản của Nhật Bản. Phong cách này ưu tiên ánh sáng tự nhiên, vật liệu gỗ, và các đường nét gọn gàng.</p>
            <p><strong>2. Vật liệu bền vững:</strong> Gỗ tái chế, tre, nứa, và các loại vải hữu cơ đang trở thành lựa chọn hàng đầu, thể hiện ý thức bảo vệ môi trường.</p>
            <p><strong>3. Đường cong mềm mại:</strong> Thay vì các góc cạnh sắc nét, các mẫu sofa, bàn trà, và cả kiến trúc vòm đang quay trở lại, mang đến cảm giác mềm mại, thư thái cho không gian.</p>
        `
    },
    {
        id: 'tt002',
        category: 'MẸO VẶT',
        title: 'Mẹo Chọn Sofa Cho Phòng Khách Nhỏ',
        summary: 'Đừng lo lắng nếu phòng khách của bạn có diện tích khiêm tốn, đây là cách chọn sofa thông minh để tối ưu không gian...',
        img: 'https://m.media-amazon.com/images/I/719VxYo4k-L.jpg',
        content: `
            <p>Chọn nội thất cho phòng khách nhỏ là một bài toán khó. Tuy nhiên, chỉ cần vài mẹo nhỏ, bạn hoàn toàn có thể tạo ra một không gian vừa vặn, thoải mái.</p>
            <p><strong>1. Chọn sofa chân cao:</strong> Thiết kế chân cao tạo cảm giác sàn nhà thoáng đãng, làm cho không gian có vẻ rộng hơn.</p>
            <p><strong>2. Màu sắc sáng:</strong> Sofa màu be, xám nhạt, hoặc trắng sẽ "đánh lừa" thị giác, mang lại cảm giác nhẹ nhàng, không bị bí bách.</p>
            <p><strong>3. Kiểu dáng đơn giản:</strong> Tránh các mẫu sofa có tay vịn quá to hoặc chi tiết rườm rà. Một chiếc sofa băng (sofa văng) đơn giản là lựa chọn hoàn hảo.</p>
        `
    },
    {
        id: 'tt003',
        category: 'KHÔNG GIAN',
        title: 'Tối Ưu Không Gian Bếp Hiện Đại',
        summary: 'Một căn bếp gọn gàng, thông thoáng không chỉ đẹp mắt mà còn tạo cảm hứng nấu nướng tuyệt vời cho gia đình bạn mỗi ngày...',
        img: 'https://hawonkoo.vn/medias/hwks1/images/2023/06/khong-gian-bep-9.jpg',
        content: `
            <p>Nhà bếp là trái tim của ngôi nhà. Việc tối ưu không gian bếp giúp công việc nội trợ trở nên dễ dàng và thú vị hơn.</p>
            <p><strong>1. Tận dụng không gian chiều dọc:</strong> Lắp đặt các hệ tủ kịch trần để lưu trữ các vật dụng ít dùng, giải phóng không gian cho quầy bếp.</p>
            <p><strong>2. Phụ kiện thông minh:</strong> Sử dụng các khay chia, giá treo, hoặc kệ góc xoay để không có "không gian chết" trong tủ.</p>
            <p><strong>3. Ánh sáng:</strong> Ngoài đèn trần, hãy lắp thêm đèn LED dưới tủ bếp để đảm bảo khu vực chuẩn bị thức ăn luôn đủ sáng.</p>
        `
    }
];