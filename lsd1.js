const quizData = [
  {
    question: "Chức năng chính của CPU là?",
    options: [
        "Lưu trữ dữ liệu",
        "Hiển thị dữ liệu",
        "Xử lý dữ liệu",
        "Gửi dữ liệu qua mạng"
    ],
    answer: "Xử lý dữ liệu"
},
{
  question: "Khối nào của CPU chịu trách nhiệm thực hiện các phép tính cơ bản như cộng, trừ, nhân, chia?",
  options: [
      "ALU (Arithmetic Logic Unit)",
      "RAM (Random Access Memory)",
      "ROM (Read-Only Memory)",
      "CU (Control Unit)"
  ],
  answer: "ALU (Arithmetic Logic Unit)"
},
{
  question: "Thành phần nào trong CPU chịu trách nhiệm điều khiển hoạt động của máy tính và lấy dữ liệu từ bộ nhớ?",
  options: [
      "ALU (Arithmetic Logic Unit)",
      "RAM (Random Access Memory)",
      "ROM (Read-Only Memory)",
      "CU (Control Unit)"
  ],
  answer: "CU (Control Unit)"
},
{
  question: "Trong kiến trúc CISC, một lệnh có thể thực hiện nhiều tác vụ khác nhau bao gồm:",
  options: [
      "Các phép tính toán",
      "Truy cập bộ nhớ",
      "Kiểm soát luồng chương trình (Chuyển tới địa chỉ khác)",
      "Tất cả đáp án trên"
  ],
  answer: "Tất cả đáp án trên"
},
{
  question: "Kiến trúc RISC tập trung vào điều gì?",
  options: [
      "Tăng đa nhiệm",
      "Tối ưu hóa hiệu suất xử lý",
      "Giảm độ phức tạp của lệnh",
      "Điều khiển bộ nhớ"
  ],
  answer: "Giảm độ phức tạp của lệnh"
},
{
  question: "ROM và RAM đều là loại bộ nhớ trong máy tính. Tuy nhiên, điểm khác biệt quan trọng nhất giữa chúng là gì?",
  options: [
      "ROM lưu trữ dữ liệu dùng cho việc khởi động máy tính, trong khi RAM lưu trữ dữ liệu làm việc trong quá trình hoạt động của máy tính",
      "ROM lưu trữ dữ liệu dùng cho các chương trình ứng dụng, trong khi RAM lưu trữ dữ liệu hệ điều hành",
      "ROM lưu trữ dữ liệu mà người dùng nhập vào, trong khi RAM lưu trữ dữ liệu hệ thống",
      "ROM lưu trữ dữ liệu lưu trữ tạm thời, trong khi RAM lưu trữ dữ liệu dùng cho việc khởi động máy tính"
  ],
  answer: "ROM lưu trữ dữ liệu dùng cho việc khởi động máy tính, trong khi RAM lưu trữ dữ liệu làm việc trong quá trình hoạt động của máy tính"
},
{
  question: "Trong một hệ thống vi xử lý bộ nhớ ROM thường được sử dụng để:",
  options: [
      "Lưu các hằng biến của chương trình",
      "Lưu các chương trình khởi động hệ thống và quản lý các thiết bị ngoại vi",
      "Lưu các dữ liệu cần truy cập nhanh",
      "Lưu các chương trình ứng dụng nạp từ ổ cứng"
  ],
  answer: "Lưu các chương trình khởi động hệ thống và quản lý các thiết bị ngoại vi"
},
{
  question: "Trong một hệ thống vi xử lý bộ nhớ RAM thường được sử dụng để:",
  options: [
      "Lưu các hằng và các biến của chương trình",
      "Lưu các chương trình khởi động hệ thống và quản lý các thiết bị ngoại vi",
      "Lưu các dữ liệu cần truy cập nhanh",
      "Lưu các chương trình ứng dụng nạp từ ổ cứng"
  ],
  answer: "Lưu các hằng và các biến của chương trình"
},
{
  question: "BUS địa chỉ (Address Bus) trong hệ thống vi xử lý được sử dụng để làm gì?",
  options: [
      "Truyền dữ liệu giữa CPU với bộ nhớ và cổng vào ra",
      "Điều khiển các chế độ hoạt động của hệ thống",
      "Định vị ví trí sẽ truyền dữ liệu với CPU",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Định vị ví trí sẽ truyền dữ liệu với CPU"
},
{
  question: "Trong một hệ thống vi xử lý, BUS địa chỉ là các tín hiệu:",
  options: [
      "Ngõ vào",
      "Ngõ ra",
      "Hai chiều",
      "Có tín hiệu chỉ vào, chỉ ra, hai chiều"
  ],
  answer: "Ngõ ra"
},
{
  question: "Trong một hệ thống vi xử lý, BUS dữ liệu là các tín hiệu:",
  options: [
      "Ngõ vào",
      "Ngõ ra",
      "Hai chiều",
      "Có tín hiệu chỉ vào, chỉ ra, hai chiều"
  ],
  answer: "Hai chiều"
},
{
  question: "Trong một hệ thống vi xử lý, BUS điều khiển là các tín hiệu:",
  options: [
      "Ngõ vào",
      "Ngõ ra",
      "Hai chiều",
      "Có tín hiệu chỉ vào, tín hiệu chỉ ra, và tín hiệu hai chiều"
  ],
  answer: "Có tín hiệu chỉ vào, tín hiệu chỉ ra, và tín hiệu hai chiều"
},
{
  question: "BUS điều khiển (Control Bus) trong hệ thống vi xử lý được sử dụng để làm gì?",
  options: [
      "Truyền dữ liệu giữa CPU với bộ nhớ và cổng vào ra",
      "Điều khiển các chế độ hoạt động của hệ thống",
      "Định vị ví trí sẽ truyền dữ liệu với CPU",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Điều khiển các chế độ hoạt động của hệ thống"
},
{
  question: "Khác nhau cơ bản giữa vi xử lý và vi điều khiển là:",
  options: [
      "Hệ thống vi xử lý thường sử dụng cho các ứng dụng lớn hoặc đa năng. Còn vi điều khiển thường sử dụng cho các ứng dụng chuyên dụng",
      "Vi xử lý không thể hoạt động một mình, nó cần kết nối với bộ nhớ và vào ra để tạo thành hệ thống vi xử lý. Còn vi điều khiển là một hệ thống vi xử lý tích hợp trong một IC",
      "Vi xử lý không tích hợp các chức năng ngoại vi, như GPIO, UART, SPI, v.v. Còn vi điều khiển thường tích hợp các thành phần trên",
      "Tất cả đáp án trên"
  ],
  answer: "Tất cả đáp án trên"
},
{
  question: "ALU thường thực hiện các phép xử lý dữ liệu nào?",
  options: [
      "Các phép so sánh",
      "Các phép tính số học",
      "Các phép tính logic",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Tín hiệu chọn một phép tính thực hiện trong ALU được cung cấp từ:",
  options: [
      "Thanh ghi",
      "PC",
      "CU",
      "Vào ra Bộ nhớ"
  ],
  answer: "CU"
},
{
  question: "Khi nào thì cổng vào ra được mở để CPU truyền dữ liệu tới một ngoại vi?",
  options: [
      "Khi CPU cấp đúng địa chỉ của cổng vào ra và tín hiệu điều khiển tích cực",
      "Khi thiết bị ngoại vi tác động mở cổng vào ra",
      "Khi vào ra nhận được dữ liệu cấp tới từ thiết bị ngoại vi",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Khi CPU cấp đúng địa chỉ của cổng vào ra và tín hiệu điều khiển tích cực"
},
{
  question: "CPU có 16 đường địa chỉ thì sẽ quản lý được bao nhiêu vị trí bộ nhớ?",
  options: [
      "65536",
      "16384",
      "8192",
      "32768"
  ],
  answer: "65536"
},
{
  question: "Dung lượng bộ nhớ mà CPU quản lý sẽ là bao nhiêu nếu nó có 20 đường địa chỉ và 8 đường dữ liệu?",
  options: [
      "2 MB",
      "1 MB",
      "4 MB",
      "8 MB"
  ],
  answer: "1 MB"
},
{
  question: "Điều gì xảy ra khi thanh ghi bộ đếm chương trình (PC) trỏ vào vùng nhớ dữ liệu?",
  options: [
      "Người lập trình sẽ được thông báo bằng một cơ chế đặc biệt",
      "CPU sẽ tự động điều chỉnh giá trị của PC để quay về vùng nhớ chứa mã lệnh",
      "Sẽ xảy ra ngoại lệ",
      "CPU sẽ thực hiện các lệnh mà người lập trình không kiểm soát được"
  ],
  answer: "CPU sẽ thực hiện các lệnh mà người lập trình không kiểm soát được"
},
{
  question: "Nếu CPU sử dụng 8 bit địa chỉ thì nó có thể quản lý được bao nhiêu vị trí vào ra?",
  options: [
      "256",
      "128",
      "64",
      "32"
  ],
  answer: "256"
},
{
  question: "Các bộ ADC và DAC trong hệ thống vi xử lý thực hiện chức năng gì?",
  options: [
      "Biến đổi tín hiệu tương tự từ CPU thành tín hiệu số cung cấp cho ngoại vi, và ngược lại biến đổi tín hiệu tương tự từ CPU thành tín hiệu số cung cấp ra bên ngoài ngoại vi",
      "Giao tiếp tín hiệu tương tự giữa các ngoại vi của hệ thống với nhau",
      "Biến đổi tín hiệu từ ngoại vi thành tín hiệu số cung cấp cho CPU, và ngược lại biến đổi tín hiệu số từ CPU thành tín hiệu tương tự cung cấp ra bên ngoài ngoại vi",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Biến đổi tín hiệu từ ngoại vi thành tín hiệu số cung cấp cho CPU, và ngược lại biến đổi tín hiệu số từ CPU thành tín hiệu tương tự cung cấp ra bên ngoài ngoại vi"
},
{
  question: "PWM thường được sử dụng trong các ứng dụng điều khiển động cơ để làm gì?",
  options: [
      "Tăng tốc độ động cơ",
      "Giảm tốc độ động cơ",
      "Đảo chiều quay của động cơ",
      "Câu A và B đều đúng",
  ],
  answer: "Câu A và B đều đúng"
},
{
  question: "PWM là viết tắt của gì?",
  options: [
      "Pulse Width Modulation",
      "Programmed Wave Manipulation",
      "Power Width Modulation",
      "Pulse Waveform Manipulation"
  ],
  answer: "Pulse Width Modulation"
},
{
  question: "PWM có thể được tạo ra trên một vi điều khiển hoặc hệ thống vi xử lý bằng cách sử dụng khối chức năng nào?",
  options: [
      "Điện áp đầu vào",
      "Điện áp nguồn",
      "Timer/Counter",
      "Điều khiển từ xa"
  ],
  answer: "Timer/Counter"
},
{
  question: "Khi có các thanh ghi chương trình, thanh ghi được sử dụng như thế nào?",
  options: [
      "Thanh ghi",
      "Thanh ghi được",
      "Thanh ghi sử dụng",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "CPU sử dụng tín hiệu của BUS nào để thông báo cho vào ra biết cần cấp hay nhận dữ liệu?",
  options: [
      "Địa chỉ",
      "Dữ liệu",
      "Điều khiển",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Điều khiển"
},
{
  question: "Các chế độ địa chỉ 'Addressing mode' là:",
  options: [
      "Các cách mà một lệnh xử lý các dữ liệu",
      "Các cách mà một lệnh hoặc một hướng dẫn lấy địa chỉ hoặc dữ liệu",
      "Là các vị trí của dữ liệu và mã lệnh trong bộ nhớ",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Các cách mà một lệnh hoặc một hướng dẫn lấy địa chỉ hoặc dữ liệu"
},
{
  question: "Các CPU CISC sẽ có các lợi điểm gì so với các CPU RISC?",
  options: [
      "CISC thường hỗ trợ nhiều chức năng phức tạp trong lệnh, điều này giúp đơn giản hóa quá trình lập trình cho các ứng dụng phức tạp như hệ điều hành và phần mềm ứng dụng",
      "CISC hỗ trợ các kiểu dữ liệu đơn giản nên dễ dàng trong việc lập trình hơn",
      "CISC tích hợp nhiều chức năng phức tạp trong một lệnh nên quá trình thực hiện chương trình sẽ nhanh chóng hơn",
      "Cả ba câu kia đều đúng"
  ],
  answer: "CISC thường hỗ trợ nhiều chức năng phức tạp trong lệnh, điều này giúp đơn giản hóa quá trình lập trình cho các ứng dụng phức tạp như hệ điều hành và phần mềm ứng dụng"
},
{
  question: "Cấu trúc đường ống (Pipeline) là gì?",
  options: [
      "Là việc thực hiện đồng thời nhiều lệnh tại một thời điểm, mỗi lệnh thực hiện một công đoạn khác nhau",
      "Là việc thực hiện tuần tự từng lệnh, lệnh này thực hiện xong mới tới lệnh kế tiếp",
      "Là việc thực hiện các lệnh một cấu trúc ống trong vi xử lý",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Là việc thực hiện đồng thời nhiều lệnh tại một thời điểm, mỗi lệnh thực hiện một công đoạn khác nhau"
},
{
  question: "Chương trình trong các hệ thống vi xử lý là gì?",
  options: [
      "Là tập hợp các lệnh sắp xếp theo một thuật toán nhất định để xử lý một công việc hay một bài toán nhất định",
      "Là tập lệnh của vi xử lý do nhà sản xuất công bố",
      "Là tập hợp các lệnh được người sử dụng sắp xếp một cách ngẫu nhiên",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Là tập hợp các lệnh sắp xếp theo một thuật toán nhất định để xử lý một công việc hay một bài toán nhất định"
},
{
  question: "Các chương trình chứa trong bộ nhớ để CPU thực hiện là các chương trình dưới dạng:",
  options: [
      "Các chương trình bằng ngôn ngữ bất kỳ",
      "Các chương trình ngôn ngữ cấp cao",
      "Các chương trình mã máy (Machine language)",
      "Các chương trình hợp ngữ (Assembly)"
  ],
  answer: "Các chương trình mã máy (Machine language)"
},
{
  question: "Để đọc dữ liệu từ bộ nhớ, CPU cần thực hiện các công việc nào?",
  options: [
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn bộ nhớ, cấp tín hiệu yêu cầu đọc bộ nhớ và nhận dữ liệu từ data bus vào",
      "CPU nhận địa chỉ từ bộ nhớ, cấp tín hiệu điều khiển chọn bộ nhớ, cấp tín hiệu yêu cầu đọc bộ nhớ và nhận dữ liệu từ data bus vào",
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn bộ nhớ, cấp tín hiệu yêu cầu đọc bộ nhớ và cấp dữ liệu ra data bus vào",
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn bộ nhớ, nhận tín hiệu cho phép đọc bộ nhớ và nhận dữ liệu từ data bus vào"
  ],
  answer: "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn bộ nhớ, cấp tín hiệu yêu cầu đọc bộ nhớ và nhận dữ liệu từ data bus vào"
},
{
  question: "Để ghi dữ liệu ra bộ nhớ, CPU cần thực hiện các công việc nào?",
  options: [
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn bộ nhớ, cấp tín hiệu yêu cầu ghi bộ nhớ và nhận dữ liệu từ data bus vào",
      "CPU nhận địa chỉ từ bộ nhớ, cấp tín hiệu điều khiển chọn bộ nhớ, cấp tín hiệu yêu cầu ghi bộ nhớ và nhận dữ liệu từ data bus vào",
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn bộ nhớ, cấp tín hiệu yêu cầu ghi bộ nhớ và cấp dữ liệu ra data bus",
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn bộ nhớ, nhận tín hiệu cho phép ghi bộ nhớ và cấp dữ liệu ra data bus"
  ],
  answer: "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn bộ nhớ, cấp tín hiệu yêu cầu ghi bộ nhớ và cấp dữ liệu ra data bus"
},
{
  question: "Để đọc dữ liệu từ vào ra, CPU cần thực hiện các công việc nào?",
  options: [
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn vào ra, cấp tín hiệu yêu cầu đọc vào ra và nhận dữ liệu từ data bus vào",
      "CPU nhận địa chỉ từ vào ra, cấp tín hiệu điều khiển chọn vào ra, cấp tín hiệu yêu cầu đọc vào ra và nhận dữ liệu từ data bus vào",
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn vào ra, nhận tín hiệu cho phép đọc từ vào ra và nhận dữ liệu từ data bus vào",
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn vào ra, cấp tín hiệu yêu cầu đọc vào ra và cấp dữ liệu ra data bus"
  ],
  answer: "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn vào ra, cấp tín hiệu yêu cầu đọc vào ra và nhận dữ liệu từ data bus vào"
},
{
  question: "Để ghi dữ liệu ra vào ra, CPU cần thực hiện các công việc nào?",
  options: [
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn vào ra, cấp tín hiệu yêu cầu ghi vào ra và nhận dữ liệu từ data bus vào",
      "CPU nhận địa chỉ từ vào ra, cấp tín hiệu điều khiển chọn vào ra, cấp tín hiệu yêu cầu phép ghi vào ra và cấp dữ liệu ra data bus",
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn vào ra, cấp tín hiệu yêu cầu phép ghi vào ra và cấp dữ liệu ra data bus",
      "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn vào ra, nhận tín hiệu cho phép ghi từ vào ra và cấp dữ liệu ra data bus"
  ],
  answer: "CPU cấp địa chỉ, cấp tín hiệu điều khiển chọn vào ra, cấp tín hiệu yêu cầu phép ghi vào ra và cấp dữ liệu ra data bus"
},
{
  question: "Để đọc lệnh, CPU cần thực hiện các công việc nào?",
  options: [
      "CPU nhận địa chỉ vào PC, cấp tín hiệu chọn bộ nhớ, cấp tín hiệu đọc bộ nhớ và lấy mã lệnh từ Data Bus",
      "CPU cấp địa chỉ từ PC, cấp tín hiệu chọn bộ nhớ, cấp tín hiệu đọc bộ nhớ và lấy mã lệnh từ Data Bus",
      "CPU cấp địa chỉ từ PC, cấp tín hiệu chọn bộ nhớ, nhận tín hiệu đọc từ bộ nhớ và lấy mã lệnh từ Data Bus",
      "Cả ba câu kia đều đúng"
  ],
  answer: "CPU cấp địa chỉ từ PC, cấp tín hiệu chọn bộ nhớ, cấp tín hiệu đọc bộ nhớ và lấy mã lệnh từ Data Bus"
},
{
  question: "Khi thực hiện các lệnh với dữ liệu nằm trên các thanh ghi bên trong CPU, data bus của CPU sẽ ở trạng thái?",
  options: [
    "Là các ngõ vào",
    "Là các ngõ ra",
    "Là các đường trở kháng cao",
    "Mang các mức logic không xác định"
  ],
  answer: "Là các ngõ ra"
},
{
  question: "Thực hiện thiết kế các hệ thống điều khiển bằng MCU sẽ đơn giản và mất ít thời gian hơn thực hiện thiết kế bằng hệ thống vi xử lý là do?",
  options: [
    "Mạch phần cứng đơn giản",
    "Việc lập trình đơn giản hơn",
    "Các công cụ lập trình và biên dịch phần mềm tiện dụng hơn",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Để xác định đã hết thời gian trễ hoặc đủ số sự kiện, Timer/Counter có thể?",
  options: [
    "Chờ điều kiện tràn khi đếm tăng",
    "Chờ điều kiện so sánh bằng giá trị định trước",
    "Chờ giá trị bộ đếm bằng 0 khi đếm xuống",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Chờ điều kiện so sánh bằng giá trị định trước"
},
{
  question: "Trong cấu trúc một CPU truyền thống thanh ghi chứa (Acc) thường có chức năng gì khi ALU thực hiện các phép tính số học và logic?",
  options: [
    "Chứa kết quả của các phép tính",
    "Giữ một toán hạng và kết quả của phép tính",
    "Chứa trạng thái của các phép tính",
    "Chứa các toán hạng của phép tính"
  ],
  answer: "Giữ một toán hạng và kết quả của phép tính"
},
{
  question: "ALU thực hiện các phép tính nhiều nhất có bao nhiêu toán hạng?",
  options: [
    "1",
    "2",
    "3",
    "Tùy thuộc vào loại cấu trúc ALU khác nhau"
  ],
  answer: "Tùy thuộc vào loại cấu trúc ALU khác nhau"
},
{
  question: "Các toán hạng mà ALU thực hiện có thể nằm ở đâu trong hệ?",
  options: [
    "Trong các thanh ghi",
    "Trong vùng nhớ dữ liệu",
    "Trong vùng nhớ chương trình",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Chức năng chính của BIU là gì?",
  options: [
    "Quản lý giao tiếp giữa CPU với các thành phần bên ngoài hệ thống vi xử lý",
    "Thực hiện phép tính số học",
    "Điều khiển hoạt động của CPU",
    "Thực hiện phép tính logic"
  ],
  answer: "Quản lý giao tiếp giữa CPU với các thành phần bên ngoài hệ thống vi xử lý"
},
{
  question: "Chức năng nào sau đây là đúng cho thanh ghi bộ đếm chương trình (PC) của CPU?",
  options: [
    "Đếm số lệnh mà CPU đã thực hiện",
    "Giữ địa chỉ bộ nhớ để lấy các lệnh vào CPU",
    "Đếm số dữ liệu của chương trình mà CPU thực hiện",
    "Giữ mã lệnh cung cấp cho CU giải mã thực hiện"
  ],
  answer: "Giữ địa chỉ bộ nhớ để lấy các lệnh vào CPU"
},
{
  question: "Hàng đợi lệnh (Instruction Queue) có chức năng?",
  options: [
    "Chứa các mã lệnh lấy vào tự bộ nhớ",
    "Điều khiển việc chờ để lấy các lệnh từ bộ nhớ",
    "Chứa các địa chỉ lấy lệnh của các lệnh tiếp theo trong chương trình",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các thanh ghi địa chỉ bộ nhớ (MAR) có chức năng?",
  options: [
    "Chứa địa chỉ của đỉnh ngăn xếp",
    "Chứa địa chỉ của lệnh sẽ được thực hiện",
    "Chứa địa chỉ để truy cập tới các ô nhớ và vào ra",
    "Chứa địa chỉ của các thanh ghi khác"
  ],
  answer: "Chứa địa chỉ để truy cập tới các ô nhớ và vào ra"
},
{
  question: "Thanh ghi con trỏ ngăn xếp (SP) có các chức năng?",
  options: [
    "Cung cấp địa chỉ để đọc ghi ngăn xếp, thay đổi giá trị sau các lệnh truy cập ngăn xếp để sử dụng cho lần truy cập tiếp theo",
    "Trỏ tới vị trí của ngăn xếp nằm ngoài thiết bị ngoại vi lưu trữ dữ liệu",
    "Cung cấp địa để đọc ghi ngăn xếp, thay đổi dữ liệu lấy được từ ngăn xếp",
    "Tất cả đáp án trên"
  ],
  answer: "Cung cấp địa chỉ để đọc ghi ngăn xếp, thay đổi giá trị sau các lệnh truy cập ngăn xếp để sử dụng cho lần truy cập tiếp theo"
},
{
  question: "Thanh ghi chỉ số (Index Register) có chức năng?",
  options: [
    "Giữ giá trị độ dời địa chỉ trong các lệnh truy cập bộ nhớ theo chế độ chỉ số",
    "Giữ địa chỉ cơ sở trong các lệnh truy cập bộ nhớ theo chế độ chỉ số",
    "Giữ dữ liệu truy cập từ bộ nhớ trong các lệnh truy cập bộ nhớ theo chế độ chỉ số",
    "Giữ độ dời để trỏ tới lệnh kế tiếp trong các lệnh truy cập bộ nhớ theo chế độ chỉ số"
  ],
  answer: "Giữ địa chỉ cơ sở trong các lệnh truy cập bộ nhớ theo chế độ chỉ số"
},
{
  question: "Thông thường các bit trong thanh ghi cờ bao gồm?",
  options: [
    "Các bit thông báo trạng thái các phép tính mà ALU thực hiện",
    "Các bit thông báo trạng thái các chế độ hoạt động của CPU",
    "Các bit điều khiển các chế độ hoạt động của CPU",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Điều khiển chương trình sẽ thay đổi không tuân theo cơ chế tuần tự trong các cơ chế?",
  options: [
    "Lệnh rẽ nhánh",
    "Lệnh chương trình con",
    "Phục vụ ngắt",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Trong lệnh rẽ nhánh tương đối, địa chỉ của lệnh tiếp theo thực hiện là?",
  options: [
    "Được lấy từ đỉnh ngăn xếp",
    "Giá trị hiện tại của PC cộng hoặc trừ một số độ dời mã hóa trong lệnh",
    "Là một giá trị được mã hóa trong lệnh",
    "Là giá trị của thanh ghi cờ"
  ],
  answer: "Giá trị hiện tại của PC cộng hoặc trừ một số độ dời mã hóa trong lệnh"
},
{
  question: "Trạng thái ARM của ARM7TDMI các lệnh thực hiện với dữ liệu bao nhiêu bit?",
  options: [
    "8",
    "16",
    "32",
    "64"
  ],
  answer: "32"
},
{
  question: "ARM là viết tắt của gì?",
  options: [
    "Advanced Reduced Instruction Set Computer",
    "Advanced Random Information System Core",
    "Advanced RISC Machine",
    "Advanced Complex Instruction Set Computer"
  ],
  answer: "Advanced RISC Machine"
},
{
  question: "Điểm mạnh chính của vi xử lý ARM là gì?",
  options: [
    "Hiệu suất cao",
    "Tiêu thụ năng lượng thấp",
    "Số lượng lệnh phong phú",
    "Tương thích đa nền tảng"
  ],
  answer: "Tiêu thụ năng lượng thấp"
},
{
  question: "ARM7TDMI có bao nhiêu chế độ hoạt động?",
  options: [
    "5",
    "6",
    "7",
    "8"
  ],
  answer: "6"
},
{
  question: "Thanh ghi PC (Program Counter) trong ARM7 được sử dụng để làm gì?",
  options: [
    "Lưu trữ dữ liệu chương trình",
    "Đếm số lần thực hiện lệnh",
    "Lưu trữ địa chỉ của lệnh tiếp theo cần thực hiện",
    "Lưu trữ địa chỉ của bộ nhớ RAM"
  ],
  answer: "Lưu trữ địa chỉ của lệnh tiếp theo cần thực hiện"
},
{
  question: "Thanh ghi CPSR (Current Program Status Register) trong ARM7 được sử dụng để làm gì?",
  options: [
    "Lưu trạng thái hiện tại của chương trình",
    "Lưu trữ dữ liệu người dùng",
    "Lưu trữ dữ liệu tạm thời",
    "Lưu trữ địa chỉ của bộ nhớ ROM"
  ],
  answer: "Lưu trạng thái hiện tại của chương trình"
},
{
  question: "ARM7TDMI có bao nhiêu tập lệnh khác nhau?",
  options: [
    "2",
    "4",
    "6",
    "8"
  ],
  answer: "2"
},
{
  question: "Trong kiến trúc ARM7, thanh ghi LR (Link Register) được sử dụng để làm gì?",
  options: [
    "Lưu trạng thái hiện tại của chương trình",
    "Lưu trữ dữ liệu người dùng",
    "Lưu trữ địa chỉ của lệnh quay lại sau một lệnh nhảy (branch)",
    "Lưu trữ địa chỉ của bộ nhớ RAM"
  ],
  answer: "Lưu trữ địa chỉ của lệnh quay lại sau một lệnh nhảy (branch)"
},
{
  question: "Trong kiến trúc ARM7, thanh ghi SP (Stack Pointer) được sử dụng để làm gì?",
  options: [
    "Lưu trạng thái hiện tại của chương trình",
    "Lưu trữ dữ liệu người dùng",
    "Quản lý ngăn xếp (stack) của chương trình",
    "Lưu trữ địa chỉ của bộ nhớ ROM"
  ],
  answer: "Quản lý ngăn xếp (stack) của chương trình"
},
{
  question: "ARM7TDMI có bao nhiêu thanh ghi?",
  options: [
    "35",
    "36",
    "37",
    "38"
  ],
  answer: "37"
},
{
  question: " Bit T trong thanh ghi CPSR của ARM7TDMI sử dụng để:",
  options: [
    "Thay đổi chế độ hoạt động (User, FIQ, IRQ,...)",
    "Là bit bẫy (Trap) khi thực hiện chương trình",
    "Là bit báo trạng thái hoạt động của CPU",
    "Tất cả đáp án trên"
  ],
  answer: "Thay đổi chế độ hoạt động (User, FIQ, IRQ,...)"
},
{
  question: "Các chế độ (Mode) hoạt động của ARM là?",
  options: [
    "User, System, Supervisor",
    "FIQ, IRQ, reset, Abort, Undefine",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Khi giải mã một lệnh mà ALU thực hiện, tín hiệu CU cung cấp để xác định những gì?",
  options: [
    "Khối mạch phần cứng thực hiện phép toán; Vị trí cung cấp dữ liệu cho phép toán",
    "Vị trí ghi các bit trạng thái của phép toán thực hiện; Vị trí chứa kết quả phép toán",
    "Vị trí lấy lệnh tiếp theo",
    "Cả A và B đều đúng"
  ],
  answer: "Cả A và B đều đúng"
},
{
  question: "Khi sử dụng thanh ghi chứa (Acc) sẽ có lợi ích gì?",
  options: [
    "Chứa được nhiều dữ liệu hơn",
    "Mã lệnh số học logic sẽ ngắn do không phải mã hóa một toán hạng và nơi chứa kết quả của lệnh",
    "Giảm việc đọc ghi bộ nhớ để truy cập các toán hạng",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "ALU cung cấp các cờ nào tới thanh ghi cờ?",
  options: [
    "Các cờ điều khiển các chế độ xử lý dữ liệu khác nhau của CPU",
    "Các cờ điều khiển các chế độ giao tiếp với bên ngoài của CPU",
    "Các cờ thông báo trạng thái kết quả của các phép tính mà ALU thực hiện",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Các cờ thông báo trạng thái kết quả của các phép tính mà ALU thực hiện"
},
{
  question: "Sau khi thực hiện xong một lệnh, giá trị của thanh ghi PC sẽ thay đổi thế nào?",
  options: [
    "Giữ nguyên giá trị hiện tại đang trỏ tới lệnh viết kế tiếp trong chương trình",
    "Cộng trừ đi một giá trị lưu trong mã lệnh để trỏ tới một vị trí lấy lệnh mới",
    "Nạp một giá trị mới lưu trong mã lệnh để trỏ tới một vị trí lấy lệnh mới",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cộng trừ đi một giá trị lưu trong mã lệnh để trỏ tới một vị trí lấy lệnh mới"
},
{
  question: "Hàng đợi lệnh là một cấu trúc bộ nhớ hoạt động theo nguyên tắc:",
  options: [
    "FIFO",
    "FILO",
    "LIFO",
    "FOLI"
  ],
  answer: "FIFO"
},
{
  question: "Bằng nguyên tắc nào mà trong ngăn xếp dữ liệu nào cất vào sau cùng sẽ được lấy ra trước tiên (LIFO)?",
  options: [
    "Do thanh ghi SP có cơ chế chứa được nhiều dữ liệu một cách tuần tự",
    "Do mỗi lần cất vào ngăn xếp dữ liệu sẽ được tự động đẩy xuống địa chỉ thấp, và khi lấy một dữ liệu ra khỏi ngăn xếp dữ liệu trong ngăn xếp sẽ tự động được đẩy lên địa chỉ cao hơn",
    "Do khi cất dữ liệu vào ngăn xếp trước hết SP sẽ giảm và dữ liệu sẽ được cất vào địa chỉ SP giữ, và khi lấy ra từ ngăn xếp dữ liệu sẽ lấy từ địa chỉ SP (là dữ liệu cất vào sau cùng), sau đó SP mới tự động tăng để trỏ tới dữ liệu cất vào trước đó",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Do khi cất dữ liệu vào ngăn xếp trước hết SP sẽ giảm và dữ liệu sẽ được cất vào địa chỉ SP giữ, và khi lấy ra từ ngăn xếp dữ liệu sẽ lấy từ địa chỉ SP (là dữ liệu cất vào sau cùng), sau đó SP mới tự động tăng để trỏ tới dữ liệu cất vào trước đó"
},
{
  question: "Ngăn xếp có các chức năng gì?",
  options: [
    "Cả ba câu kia đều đúng",
    "Lưu các cờ và các trạng thái hoạt động hiện hành của CPU khi CPU thực hiện các chương trình con hoặc các chương trình phục vụ ngắt",
    "Lưu trữ các dữ liệu trung gian còn sử dụng trong các thanh ghi để có thể sử dụng các thanh ghi cho các dữ liệu khác",
    "Lưu địa chỉ quay về khi CPU thực hiện các chương trình con hoặc các chương trình phục vụ ngắt"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Cho biết sự khác nhau khi truy cập bộ nhớ bằng các lệnh di chuyển dữ liệu sử dụng thanh ghi MAR cấp đại chỉ, và bằng các lệnh ngăn xếp sử dụng thanh ghi SP cấp địa chỉ?",
  options: [
    "Sau khi truy cập bộ nhớ thanh ghi MAR sẽ tự động thay đổi giá trị, còn thanh ghi SP có giá trị không đổi",
    "Sau khi truy cập bộ nhớ thanh ghi MAR có giá trị không đổi còn thanh ghi SP sẽ tự động thay đổi giá trị",
    "Sau khi truy cập bộ nhớ bằng MAR dữ liệu trong bộ nhớ không đổi còn thanh ghi SP dữ liệu trong bộ nhớ sẽ tự động thay đổi",
    "Sau khi truy cập bộ nhớ bằng MAR dữ liệu trong bộ nhớ thay đổi còn thanh ghi SP dữ liệu trong bộ nhớ không đổi"
  ],
  answer: "Sau khi truy cập bộ nhớ thanh ghi MAR có giá trị không đổi còn thanh ghi SP sẽ tự động thay đổi giá trị"
},
{
  question: "Chương trình con phục vụ ngắt INT được thực hiện khi:",
  options: [
    "Cả ba câu kia đều đúng",
    "Cờ cho phép ngắt được xóa và có tín hiệu yêu cầu ngắt cấp tới CPU",
    "Khi che ngắt và có tín hiệu yêu cầu ngắt cấp tới CPU",
    "Cờ cho phép ngắt được lập và có tín hiệu yêu cầu ngắt cấp tới CPU"
  ],
  answer: "Cờ cho phép ngắt được lập và có tín hiệu yêu cầu ngắt cấp tới CPU"
},
{
  question: "Các lệnh rẽ nhánh có điều kiện sẽ sử dụng điều kiện chứa tại:",
  options: [
    "Các bit trạng thái của thanh ghi cờ",
    "Các bit điều khiển chế độ của thanh ghi cờ",
    "Toàn bộ các bit của thanh ghi cờ",
    "Các bit chứa trong mã lệnh"
  ],
  answer: "Các bit trạng thái của thanh ghi cờ"
},
{
  question: "Cơ chế chuyển điều khiển chương trình bằng lệnh rẽ nhánh và lệnh gọi chương trình con có gì khác nhau?",
  options: [
    "Lệnh rẽ nhánh chuyển điều khiển chương trình đi nhiều vị trí",
    "Lệnh rẽ nhánh không lưu địa chỉ quay về và các trạng thái hoạt động hiện tại của CPU",
    "Lệnh gọi chương trình con không lưu địa chỉ quay về và các trạng thái hoạt động hiện tại của CPU",
    "Lệnh gọi chương trình con chuyển điều khiển chương trình đi nhiều vị trí"
  ],
  answer: "Lệnh rẽ nhánh không lưu địa chỉ quay về và các trạng thái hoạt động hiện tại của CPU"
},
{
  question: "Cho biết sự khác nhau giữa cơ chế chuyển điều khiển chương trình bằng ngắt cứng và bằng chương trình con:",
  options: [
    "Chuyển điều khiển bằng chương trình con không lưu địa chỉ quay về và các trạng thái hoạt động hiện tại của CPU",
    "Chuyển điều khiển bằng ngắt cứng không lưu địa chỉ quay về và các trạng thái hoạt động hiện tại của CPU",
    "Chuyển điều khiển bằng ngắt cứng được thực hiện bằng lệnh còn chuyển điều khiển bằng chương trình con được tác động bằng tín hiệu điện phần cứng",
    "Chuyển điều khiển bằng ngắt cứng được tác động bằng tín hiệu điện phần cứng còn chuyển điều khiển bằng chương trình con được thực hiện bằng lệnh"
  ],
  answer: "Chuyển điều khiển bằng ngắt cứng được tác động bằng tín hiệu điện phần cứng còn chuyển điều khiển bằng chương trình con được thực hiện bằng lệnh"
},
{
  question: "Các yếu tố khác nhau giữa các CPU RISC và CISC là:",
  options: [
    "Số lượng lệnh; Thời gian thực hiện các loại lệnh",
    "Địa chỉ lệnh",
    "Số lượng thanh ghi",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các lệnh của các bộ vi xử lý RISC thường có độ dài bằng nhau nhằm mục đích gì?",
  options: [
    "Dễ dàng phân đoạn trong cấu trúc đường ống",
    "Tối ưu hóa việc sử dụng bộ đệm lệnh (Cache)",
    "Cấu trúc giải mã lệnh đơn giản; Giảm độ phức tạp của việc xử lý lệnh",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các loại bộ nhớ thường có trong một vi điều khiển (MCU) bao gồm:",
  options: [
    "Vùng nhớ ROM chứa chương trình",
    "Vùng nhớ SRAM sử dụng cho các hằng và biến",
    "Vùng nhớ ROM Flash sử dụng cho các dữ liệu không mất khi mất nguồn",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Khi kết quả phép tính bằng không thì:",
  options: [
    "CF = 1",
    "ZF = 1",
    "NF = 1",
    "VF = 1"
  ],
  answer: "ZF = 1"
},
{
  question: "Các vi điều khiển thường có các loại vào ra gì?",
  options: [
    "UART",
    "GPIO",
    "SPI, I2C",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các vi xử lý ARM được sử dụng trong hầu hết các thiết bị điện tử di động do đặc tính gì?",
  options: [
    "Hiệu suất hoạt động cao",
    "Cấu trúc nhỏ gọn",
    "Tiêu thụ nguồn thấp",
    "Thực hiện được các lệnh phức tạp"
  ],
  answer: "Hiệu suất hoạt động cao"
},
{
  question: "Các chế độ tiết kiệm năng lượng của một vi điều khiển bao gồm:",
  options: [
    "Sleep",
    "Idle",
    "Power down",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "MMU có chức năng gì trong hệ thống vi xử lý?",
  options: [
    "Quản lý bộ nhớ ảo",
    "Quản lý bộ nhớ dữ liệu",
    "Quản lý bộ nhớ chương trình",
    "Quản lý tất cả các loại bộ nhớ trong hệ thống"
  ],
  answer: "Quản lý bộ nhớ ảo"
},
{
  question: "Bit I trong thanh ghi CPSR của ARM7TDMI sử dụng để:",
  options: [
    "Thực hiện các lệnh với số nguyên (Integer)",
    "Cho phép ngắt",
    "Thực hiện các thao tác dữ liệu bên trong CPU",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cho phép ngắt"
},
{
  question: "Các ngoại lệ SWI và Reset sẽ làm ARM chuyển qua hoạt động ở chế độ:",
  options: [
    "User",
    "Supervisor",
    "System",
    "Abort"
  ],
  answer: "Supervisor"
},
{
  question: "IRQ và FIQ là các ngắt xảy ra khi:",
  options: [
    "Có tín hiệu phần cứng cấp tới các chân yêu cầu ngắt tương ứng",
    "Thực hiện các lệnh phần mềm tương ứng",
    "Khi chuyển qua chế độ hoạt động bằng cách thay đổi các bit M trong CPSR",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Có tín hiệu phần cứng cấp tới các chân yêu cầu ngắt tương ứng"
},
{
  question: "Các bit cờ điều kiện trong thanh ghi trạng thái chương trình CPSR (Current Program Status Register) sử dụng để:",
  options: [
    "Làm điều kiện rẽ nhánh chương trình, hoặc làm điều kiện để thực hiện lệnh",
    "Thông báo trạng thái các lệnh số học và logic",
    "Thông báo trạng thái các lệnh di chuyển dữ liệu",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Thông báo trạng thái các lệnh số học và logic"
},
{
  question: "Bit N trong thanh ghi CPSR của ARM7TDMI sẽ được lập khi:",
  options: [
    "Kết quả nhỏ hơn không",
    "Thực hiện lệnh NOT",
    "Khi không thực hiện lệnh tính toán",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Kết quả nhỏ hơn không"
},
{
  question: "Bit C trong thanh ghi CPSR của ARM7TDMI sẽ được lập khi:",
  options: [
    "Kết quả lệnh cộng tràn khỏi thanh ghi",
    "Khi kết quả lệnh trừ có mượn",
    "Khi kết quả lệnh nhân cần mở rộng khỏi thanh ghi",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Bit V trong thanh ghi CPSR của ARM7TDMI sẽ được lập khi:",
  options: [
    "Kết quả lệnh cộng tràn khỏi thanh ghi",
    "Kết quả các phép tính có dấu đổi dấu không mong muốn",
    "Khi kết quả lệnh nhân cần mở rộng khỏi thanh ghi",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Kết quả các phép tính có dấu đổi dấu không mong muốn"
},
{
  question: "Trong chế độ giám sát (SVC) của ARM7 có thể:",
  options: [
    "Chạy chương trình thiết lập hệ thống",
    "Truy cập dữ liệu của hệ thống",
    "Truy cập dữ liệu của người sử dụng",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Chế độ nào của ARM không truy cập được bộ nhớ và vào ra:",
  options: [
    "User",
    "Supervisor",
    "System",
    "Abort"
  ],
  answer: "User"
},
{
  question: "Chế độ User của ARM cần bắt đầu hoạt động sau:",
  options: [
    "Chế độ System",
    "Chế độ Supervisor",
    "Chế độ IRQ",
    "Chế độ FIQ"
  ],
  answer: "Chế độ Supervisor"
},
{
  question: "Khi cần hiệu chỉnh các tham số của hệ thống có thể sử dụng chế độ nào của ARM?",
  options: [
    "User",
    "IRQ",
    "System",
    "Abort"
  ],
  answer: "System"
},
{
  question: "Chế độ FIQ của ARM thực hiện nhanh các ISR do:",
  options: [
    "Chép nhanh các thanh ghi chương trình chính",
    "Không lưu các trạng thái và thanh ghi chương trình chính",
    "Không thực hiện các ISR",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Không lưu các trạng thái và thanh ghi chương trình chính"
},
{
  question: "Chế độ Undefined sẽ xảy ra khi:",
  options: [
    "Thực hiện các chu kỳ không được định nghĩa",
    "Xảy ra ngắt không định nghĩa",
    "Thực hiện một lệnh không có trong tập lệnh",
    "Xảy ra các lỗi truy cập bộ nhớ vào ra"
  ],
  answer: "Thực hiện các chu kỳ không được định nghĩa"
},
{
  question: "Chế độ Abort sẽ xảy ra khi:",
  options: [
    "Truy cập vị trí bộ nhớ bị lỗi",
    "Truy cập dữ liệu hệ thống không được cho phép",
    "Truy cập các ứng dụng của hệ thống không được cho phép",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Khi xảy ra các ngoại lệ (Exception) ARM sẽ thực hiện các lệnh:",
  options: [
    "Tại các vị trí cố định xác định trước trong bộ nhớ",
    "Tại các vị trí cung cấp bởi bộ điều khiển ngắt",
    "Tại các vị trí không được xác định trước",
    "Không có vị trí xác định"
  ],
  answer: "Tại các vị trí cố định xác định trước trong bộ nhớ"
},
{
  question: "Khi xảy ra ngoại lệ địa chỉ quay về sẽ được lưu trữ:",
  options: [
    "Ở đỉnh ngăn xếp",
    "Ở thanh ghi đa năng",
    "Các thanh ghi LR tương ứng",
    "Ở các vị trí cố định trong bộ nhớ"
  ],
  answer: "Các thanh ghi LR tương ứng"
},
{
  question: "Công việc CPU ARM thực hiện khi xảy ra ngoại lệ:",
  options: [
    "Lưu địa chỉ quay về",
    "Lưu thanh ghi CPSR vào SPSR",
    "Đổi chế độ hoạt động, lập cờ cấm ngắt",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Công việc CPU ARM thực hiện khi kết thúc một ngoại lệ:",
  options: [
    "Dùng giá trị của LR để phục hồi giá trị của PC",
    "Phục hồi giá trị của CPSR từ SPSR",
    "Xóa các cờ cấm ngắt",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Khi đang thực hiện một ISR ngoại lệ, cơ cấm ngắt của ARM được lập để:",
  options: [
    "Chương trình ISR không dừng để chuyển qua một ISR khác",
    "Làm điều kiện để kết thúc ISR khi nó thực hiện xong",
    "Chuyển qua một ISR khác khi có yêu cầu",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Khi quay về từ một ISR của một ngoại lệ, giá trị thanh ghi PC của ARM được phục hồi bằng cách:",
  options: [
    "Lấy giá trị của thanh ghi LR",
    "Tính toán từ giá trị hiện tại của PC và LR",
    "Lấy giá trị từ đỉnh ngăn xếp",
    "Lấy giá trị từ thanh ghi SPSR"
  ],
  answer: "Lấy giá trị của thanh ghi LR"
},
{
  question: "Nếu ALU có các khối mạch thực hiện các phép tính số học và logic bao gồm: Cộng, trừ, nhân, chia, AND, OR, XOR, NOT thì nó cần nhận được ít nhất bao nhiêu tín hiệu điều khiển từ CU?",
  options: [
    "8",
    "3",
    "4",
    "7"
  ],
  answer: "4"
},
{
  question: "Các khối chức năng số có thể có trong một BIU là:",
  options: [
    "Đệm hai chiều cho bus dữ liệu",
    "Đệm một chiều cho bus địa chỉ",
    "Mạch định thời cho các tín hiệu điều khiển",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các khối chức năng số có thể có trong một Timer/Counter là:",
  options: [
    "Bộ đếm, mạch so sánh",
    "Mạch giải mã, Mạch mã hóa",
    "Mạch nhân, Mạch chia",
    "Mạch cộng, Mạch trừ"
  ],
  answer: "Bộ đếm, mạch so sánh"
},
{
  question: "Tại sao khi sử dụng thanh ghi địa chỉ bộ nhớ, độ dài mã lệnh truy cập bộ nhớ sẽ ngắn hơn?",
  options: [
    "Do CU không phải tính toán để tạo ra địa chỉ của ô nhớ cần truy cập",
    "Do không phải mã hóa địa chỉ của bộ nhớ trong mã lệnh",
    "Do dữ liệu sẽ được truyền vào thanh ghi địa chỉ",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Do không phải mã hóa địa chỉ của bộ nhớ trong mã lệnh"
},
{
  question: "Khi có hàng đợi lệnh (Instruction Queue) tốc độ thực hiện chương trình của CPU sẽ tăng lên do:",
  options: [
    "CPU có thể đồng thời thực hiện nhiều lệnh tại cùng một thời điểm",
    "CPU có thể thực hiện hai tác vụ lấy lệnh và thực hiện lệnh tại cùng một thời điểm",
    "CPU sẽ sắp hàng các lệnh của chương trình theo trình tự lập trình",
    "Cả ba câu kia đều đúng"
  ],
  answer: "CPU có thể thực hiện hai tác vụ lấy lệnh và thực hiện lệnh tại cùng một thời điểm"
},
{
  question: "Khi truy cập một chuỗi dữ liệu trong bộ nhớ, việc sử dụng các lệnh ngăn xếp sẽ có các lợi điểm gì?",
  options: [
    "Không cần thay đổi địa chỉ để truy cập tới các dữ liệu kế tiếp",
    "Có thể truy cập nhiều dữ liệu trong chuỗi một cách đồng thời",
    "Không cần truy cập dữ liệu một cách tuần tự",
    "Không cần cung cấp địa chỉ bộ nhớ để truy cập dữ liệu"
  ],
  answer: "Không cần thay đổi địa chỉ để truy cập tới các dữ liệu kế tiếp"
},
{
  question: "Khi truy cập một chuỗi dữ liệu trong bộ nhớ, việc sử dụng các lệnh với chế độ chỉ số có các lợi điểm gì?",
  options: [
    "Không cần thay đổi địa chỉ để truy cập tới các dữ liệu kế tiếp",
    "Có thể truy cập nhiều dữ liệu trong chuỗi một cách đồng thời",
    "Có thể truy cập tới các phần tử khác nhau của chuỗi theo chỉ số trong lệnh, mà không cần theo địa chỉ cụ thể của nó",
    "Không cần cung cấp địa chỉ bộ nhớ để truy cập dữ liệu"
  ],
  answer: "Có thể truy cập tới các phần tử khác nhau của chuỗi theo chỉ số trong lệnh, mà không cần theo địa chỉ cụ thể của nó"
},
{
  question: "Tại sao cần giải mã lệnh?",
  options: [
    "Để với mã lệnh ngắn có thể cung cấp nhiều tín hiệu cho phép các khối mạch trong CPU thực hiện lệnh",
    "Để bảo mật các mã lệnh trong chương trình",
    "Để thực hiện các lệnh nhanh hơn",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Để với mã lệnh ngắn có thể cung cấp nhiều tín hiệu cho phép các khối mạch trong CPU thực hiện lệnh"
},
{
  question: "Mã điều kiện PL xảy ra khi:",
  options: [
    "NF = 0",
    "ZF = 1",
    "NF = 1",
    "VF = 1"
  ],
  answer: "NF = 0"
},
{
  question: "Mã điều kiện HI xảy ra khi:",
  options: [
    "CF = 1 và ZF = 1",
    "CF = 1 và ZF = 0",
    "CF = 0 và ZF = 0",
    "CF = 0 và ZF = 1"
  ],
  answer: "CF = 1 và ZF = 0"
},
{
  question: "Mã điều kiện LS xảy ra khi:",
  options: [
    "CF = 1 hoặc ZF = 1",
    "CF = 1 hoặc ZF = 0",
    "CF = 0 hoặc ZF = 0",
    "CF = 0 hoặc ZF = 1"
  ],
  answer: "CF = 0 hoặc ZF = 1"
},
{
  question: "Mã điều kiện GE xảy ra khi:",
  options: [
    "NF = VF",
    "NF ≠ VF",
    "ZF = VF",
    "ZF ≠ VF"
  ],
  answer: "NF = VF"
},
{
  question: "Mã điều kiện LT xảy ra khi:",
  options: [
    "NF = VF",
    "NF ≠ VF",
    "ZF = VF",
    "ZF ≠ VF"
  ],
  answer: "NF ≠ VF"
},
{
  question: "Mã điều kiện LE xảy ra khi:",
  options: [
    "ZF = 1 hoặc NF ≠ VF",
    "ZF = 1 và NF ≠ VF",
    "CF = 1 và NF ≠ VF",
    "CF = 1 và ZF = 1"
  ],
  answer: "ZF = 1 hoặc NF ≠ VF"
},
{
  question: "Mã điều kiện GT xảy ra khi:",
  options: [
    "ZF = 1 và NF = VF",
    "ZF = 1 và NF ≠ VF",
    "ZF = 0 và NF = VF",
    "ZF = 0 và NF ≠ VF"
  ],
  answer: "ZF = 0 và NF ≠ VF"
},
{
  question: "Để điều khiển đọc một chip nhớ trong hệ thống vi xử lý cần ",
  options: [
    "Cấp tín hiệu chọn chip nhớ; Cấp địa chỉ để xác định ô nhớ cần đọc; Cấp tín hiệu cho phép đọc; Nhận dữ liệu ở data BUS",
    "Cấp tín hiệu chọn chip nhớ; Chờ bộ nhớ cấp địa chỉ ô nhớ cần đọc; Cấp tín hiệu cho phép đọc; Nhận dữ liệu ở data BUS",
    "Cấp tín hiệu chọn chip nhớ; Cấp địa chỉ để xác định ô nhớ cần đọc; Chờ tín hiệu cho phép đọc từ bộ nhớ; Nhận dữ liệu ở data BUS",
    "Cấp tín hiệu chọn chip nhớ; Cấp địa chỉ để xác định ô nhớ cần đọc; Chờ tín hiệu cho phép đọc từ bộ nhớ; Cấp dữ liệu ra data BUS"
  ],
  answer: "Cấp tín hiệu chọn chip nhớ; Cấp địa chỉ để xác định ô nhớ cần đọc; Cấp tín hiệu cho phép đọc; Nhận dữ liệu ở data BUS"
},
{
  question: "Để điều khiển ghi một chip nhớ trong hệ thống vi xử lý cần:",
  options: [
    "Cấp tín hiệu chọn chip nhớ; Cấp địa chỉ để xác định ô nhớ cần ghi; Cấp dữ liệu vào data bus; Cấp tín hiệu điều khiển ghi",
    "Cấp tín hiệu chọn chip nhớ; Cấp địa chỉ để xác định ô nhớ cần ghi; Cấp dữ liệu vào data bus; Chờ bộ nhớ cấp tín hiệu xác nhận đã ghi",
    "Cấp tín hiệu chọn chip nhớ; Chờ bộ nhớ cấp địa chỉ ô nhớ cần ghi; Cấp dữ liệu vào data bus; Cấp tín hiệu điều khiển ghi",
    "Cấp tín hiệu chọn chip nhớ; Cấp địa chỉ để xác định ô nhớ cần ghi; Cấp tín hiệu điều khiển ghi; Nhận dữ liệu từ data bus"
  ],
  answer: "Cấp tín hiệu chọn chip nhớ; Cấp địa chỉ để xác định ô nhớ cần ghi; Cấp dữ liệu vào data bus; Cấp tín hiệu điều khiển ghi"
},
{
  question: "Tại sao các hệ thống vi xử lý yêu cầu dung lượng bộ nhớ lớn thường sử dụng DRAM làm bộ nhớ chính?",
  options: [
    "Có giá thành rẻ",
    "Tốc độ truy cập nhanh",
    "Không cần chu kỳ làm tươi",
    "Tiêu thụ ít năng lượng"
  ],
  answer: "Có giá thành rẻ"
},
{
  question: "Cache là loại bộ nhớ:",
  options: [
    "SRAM có tốc độ truy cập nhanh",
    "DRAM có tốc độ truy cập nhanh",
    "Bộ nhớ đệm giữa thiết bị ngoại vi và hệ thống vi xử lý",
    "Flash có tốc độ truy cập nhanh"
  ],
  answer: "SRAM có tốc độ truy cập nhanh"
},
{
  question: "Các đặc tính khác nhau giữa DRAM và SRAM bao gồm:",
  options: [
    "Cấu tạo của tế bào nhớ",
    "Tốc độ truy cập",
    "Độ ổn định của dữ liệu",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Flash ROM là loại bộ nhớ:",
  options: [
    "Người sử dụng có thể ghi xóa dữ liệu nhiều lần bằng điện cả chip nhớ",
    "Người sử dụng có thể ghi xóa dữ liệu nhiều lần bằng điện từng bit nhớ",
    "Người sử dụng có thể ghi xóa dữ liệu nhiều lần bằng điện từng ô nhớ",
    "Người sử dụng có thể ghi xóa dữ liệu nhiều lần bằng điện từng khối dữ liệu"
  ],
  answer: "Người sử dụng có thể ghi xóa dữ liệu nhiều lần bằng điện từng khối dữ liệu"
},
{
  question: "EEPROM là loại bộ nhớ: ",
  options: [
    "Dữ liệu được ghi trong khi sản xuất nó",
    "Người dùng có thể ghi dữ liệu vào một lần",
    "Người sử dụng có thể ghi xóa dữ liệu nhiều lần bằng điện từng ô nhớ",
    "Người sử dụng có thể ghi dữ liệu vào bằng điện và xóa bằng tia cực tím"
  ],
  answer: "Người sử dụng có thể ghi xóa dữ liệu nhiều lần bằng điện từng ô nhớ"
},
{
  question: "Loại bộ nhớ nào sau đây thường được sử dụng làm bộ nhớ ngoài?",
  options: [
    "HDD",
    "Flash disk",
    "SD card",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Trong phương thức điều khiển vào ra theo ngắt (Interrupt):",
  options: [
    "CPU dừng tiến trình hiện tại để chạy tiến trình phục vụ vào ra khi có yêu cầu",
    "CPU dừng hoạt động sau khi phục vụ vào ra",
    "Vào ra dừng CPU để tự thực hiện quá trình truyền dữ liệu với bộ nhớ",
    "CPU tự động dừng hoạt động vào ra khi cần thiết"
  ],
  answer: "CPU dừng tiến trình hiện tại để chạy tiến trình phục vụ vào ra khi có yêu cầu"
},
{
  question: "Trong phương thức điều khiển vào ra theo quét vòng (Polling) là:",
  options: [
    "CPU tuần tự thực hiện các lệnh để phục vụ vào ra",
    "CPU tuần tự kiểm tra và thực hiện các tiến trình phục vụ các vào ra",
    "CPU tuần tự truyền dữ liệu giữa các vào ra và bộ nhớ",
    "CPU tuần tự chờ các vào ra hoạt động"
  ],
  answer: "CPU tuần tự kiểm tra và thực hiện các tiến trình phục vụ các vào ra"
},
{
  question: "Trong phương thức điều khiển vào ra theo truy cập bộ nhớ trực tiếp (DMA – Direct Memory Access):",
  options: [
    "CPU truyền dữ liệu với vào ra một cách trực tiếp",
    "Vào ra trực tiếp điều khiển việc truyền dữ liệu với CPU",
    "CPU dừng truy cập BUS để bộ nhớ và vào ra truyền dữ liệu trực tiếp với nhau",
    "Bộ điều khiển DMA trực tiếp điều khiển hoạt động truyền dữ liệu với CPU"
  ],
  answer: "CPU dừng truy cập BUS để bộ nhớ và vào ra truyền dữ liệu trực tiếp với nhau"
},
{
  question: "Trong các chế độ truyền dữ liệu nối tiếp đồng bộ, hai bên truyền nhận có thể đồng bộ với nhau bằng:",
  options: [
    "Thay đổi trạng thái đường truyền",
    "Xung clock",
    "Tín hiệu điều khiển động bộ cung cấp từ CPU",
    "Tín hiệu điều khiển động bộ cung cấp từ bộ nhớ"
  ],
  answer: "Xung clock"
},
{
  question: "Khi sử dụng cấu trúc Harvard, tốc độ thực hiện các chương trình tăng lên do:",
  options: [
    "Tập lệnh đơn giản giảm thời gian giải mã lệnh",
    "CPU có thể lấy lệnh và lấy dữ liệu tại cùng một thời điểm",
    "Cấu trúc phần cứng đơn giản",
    "Có cấu trúc đường ống cho phép thực hiện nhiều lệnh tại cùng một thời điểm"
  ],
  answer: "CPU có thể lấy lệnh và lấy dữ liệu tại cùng một thời điểm"
},
{
  question: "Trong định thời bộ nhớ SRAM ở trên, tín hiệu OE là:",
  image: "Screenshot 2024-12-18 224625.png", 
  options: [
    "Ngõ ra cấp tín hiệu cho phép đọc dữ liệu chuyển tới CPU",
    "Là tín hiệu hai chiều do CPU tác động khi đọc dữ liệu",
    "Ngõ vào nhận tín hiệu đọc dữ liệu từ CPU",
    "Là tín hiệu hai chiều do SRAM tác động khi đọc dữ liệu"
  ],
  answer: "Ngõ ra cấp tín hiệu cho phép đọc dữ liệu chuyển tới CPU"
},
{
  question: "Trong định thời bộ nhớ ROM ở trên, khi CE ở mức cao:",
  image: "Screenshot 2024-12-18 224656.png",
  options: [
    "Bus địa chỉ và bus dữ liệu của ROM sẽ ở trạng thái trở kháng cao",
    "Bus địa chỉ tích cực và bus dữ liệu của ROM sẽ ở trạng thái trở kháng cao",
    "Bus dữ liệu tích cực và bus địa chỉ của ROM sẽ ở trạng thái trở kháng cao",
    "Bus địa chỉ và bus dữ liệu của ROM sẽ ở trạng thái tích cực"
  ],
  answer: "Bus địa chỉ và bus dữ liệu của ROM sẽ ở trạng thái trở kháng cao"
},
{
  question: "Trong định thời (Timing diagram) ở trên, để thực hiện chu kỳ đọc dữ liệu cần:",
  image: "Screenshot 2024-12-18 224738.png",
  options: [
    "Cấp DT/R=1; cấp địa chỉ và chốt bằng tín hiệu ALE=1; cấp IO/M để xác định đọc bộ nhớ  hay vào ra; cấp RD=0 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ Data Bus vào CPU",
    "Cấp DT/R=0; cấp địa chỉ và chốt bằng tín hiệu ALE=1; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=0 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ data Bus vào CPU",
    "Cấp DT/R=0; cấp địa chỉ và chốt bằng tín hiệu ALE=0; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=0 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ data Bus vào CPU",
    "Cấp DT/R=0; cấp địa chỉ và chốt bằng tín hiệu ALE=1; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=1 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ data Bus vào CPU"
  ],
  answer: "Cấp DT/R=0; cấp địa chỉ và chốt bằng tín hiệu ALE=1; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=0 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ data Bus vào CPU"
},
{
  question: "Trong định thời (Timing diagram) ở trên, để thực hiện chu kỳ ghi dữ liệu cần:",
  image: "Screenshot 2024-12-18 224738.png",
  options: [
    "Cấp DT/R=1; cấp địa chỉ và chốt bằng tín hiệu ALE=1; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=0 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ Data Bus vào CPU.",
    "Cấp DT/R=0; cấp địa chỉ và chốt bằng tín hiệu ALE=1; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=0 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ Data Bus vào CPU.",
    "Cấp DT/R=0; cấp địa chỉ và chốt bằng tín hiệu ALE=0; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=0 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ Data Bus vào CPU.",
    "Cấp DT/R=0; cấp địa chỉ và chốt bằng tín hiệu ALE=1; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=1 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ Data Bus vào CPU."
  ],
  answer: "Cấp DT/R=0; cấp địa chỉ và chốt bằng tín hiệu ALE=1; cấp IO/M để xác định đọc bộ nhớ hay vào ra; cấp RD=0 tác động đọc bộ nhớ; cấp DEN=0 cho phép bộ đệm bus dữ liệu và lấy dữ liệu từ Data Bus vào CPU."
},
{
  question: "Trong sơ đồ kết nối hệ thống vi xử lý 8086, tín hiệu ALE và các bộ chốt (Latch) được sử dụng để:",
  image: "câu 138.png",
  options: [
    "Chốt BUS điều khiển kết nối tới bộ nhớ và vào ra.",
    "Chốt BUS địa chỉ kết nối tới bộ nhớ và vào ra.",
    "Chốt BUS dữ liệu kết nối tới bộ nhớ và vào ra.",
    "Điều khiển cấp nguồn cho hệ thống vi xử lý."
  ],
  answer: "Chốt BUS điều khiển kết nối tới bộ nhớ và vào ra."
},
{
  question: "Trong sơ đồ kết nối hệ thống vi xử lý, tín hiệu IO/M sẽ có mức logic 0 khi nào?",
  image: "Câu 139.png",
  options: [
    "Khi CPU đọc bộ nhớ.",
    "Khi CPU truy cập bộ nhớ.",
    "Khi CPU ghi bộ nhớ.",
    "Khi CPU truy cập vào ra."
  ],
  answer: "Khi CPU truy cập bộ nhớ."
},
{
  question: "Theo bảng trạng thái của bộ nhớ SRAM, dữ liệu sẽ được lưu vào SRAM khi:",
  image: "câu 140.png",
  options: [
    "CS1=0; CS2=1; WE=0; OE=0.",
    "CS1=0; CS2=1; WE=1; OE=1.",
    "CS1=0; CS2=1; WE=1; OE=0.",
    "Cả ba câu kia đều đúng."
  ],
  answer: "CS1=0; CS2=1; WE=0; OE=0."
},
{
  question: "Trong định thời đọc cổng vào ra, trong chu kỳ đọc vào ra các tín hiệu MEMR và MEMW sẽ ở trạng thái:",
  image: "câu 141.png",
  options: [
    "Logic 0.",
    "Logic 1.",
    "High Z.",
    "MEMR mức 0, MEMW mức 1."
  ],
  answer: "MEMR mức 0, MEMW mức 1."
},
{
  question: "Trong định thời đọc cổng vào ra, trong chu kỳ ghi vào ra các tín hiệu MEMR và MEMW sẽ ở trạng thái:",
  image: "câu 142.png",
  options: [
    "Logic 0.",
    "Logic 1.",
    "High Z.",
    "MEMR mức 0, MEMW mức 1."
  ],
  answer: "Logic 0."
},
{
  question: "Giản đồ thời gian hình vẽ trên là giản đồ của chu kỳ:",
  image: "câu 143.png",
  options: [
    "Đọc bộ nhớ",
    "Ghi bộ nhớ",
    "Đọc vào ra",
    "Ghi vào ra"
  ],
  answer: "Đọc bộ nhớ"
},
{
  question: "Trong định thời hình trên, trong chu kỳ ghi vào ra các tín hiệu IOR và IOW sẽ ở trạng thái:",
  image: "câu 144.png",
  options: [
    "Logic 0",
    "Logic 1",
    "High Z",
    "MEMR mức 0, MEMW mức 1"
  ],
  answer: "MEMR mức 0, MEMW mức 1"
},
{
  question: "Trong định thời ở trên, dữ liệu được ghi vào bộ nhớ EPROM khi cấp xung lập trình vào:",
  image: "câu 146.png",
  options: [
    "Ngõ vào E",
    "Ngõ vào P",
    "Ngõ vào G",
    "Ngõ vào Vpp"
  ],
  answer: "Ngõ vào G"
},
{
  question: "Trong định thời ở trên, tín hiệu G là:",
  image: "câu 147.png",
  options: [
    "Ngõ vào cung cấp tín hiệu đọc dữ liệu từ EPROM",
    "Ngõ vào cung cấp tín hiệu ghi dữ liệu vào EPROM",
    "Ngõ vào cung cấp tín hiệu cho phép EPROM hoạt động",
    "Ngõ vào cung cấp tín hiệu cấm EPROM hoạt động"
  ],
  answer: "Ngõ vào cung cấp tín hiệu cho phép EPROM hoạt động"
},
{
  question: "Trong sơ đồ kết nối IO hình vẽ trên, vi mạch 16L8 thực hiện chức năng:",
  image: "câu 148.png",
  options: [
    "Giải mã địa chỉ",
    "Chốt địa chỉ",
    "Truyền dữ liệu",
    "Cung cấp tín hiệu điều khiển vào ra"
  ],
  answer: "Giải mã địa chỉ"
},
{
  question: "Thiết bị điện tử hình trên có chức năng:",
  image: "149.png",
  options: [
    "Cách ly quang giữa ngõ ra và tải",
    "Cho phép điều khiển tải xoay chiều",
    "Tăng công suất điều khiển cho ngõ ra",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Trong sơ đồ trên, MOSFET có chức năng:",
  image: "150.png",
  options: [
    "Cấp dòng điện đủ lớn cho tải",
    "Thay đổi mức logic điều khiển tải",
    "Cho phép điều khiển tải có dòng điện lớn bằng tín hiệu điều khiển có dòng điện nhỏ cung cấp từ ngõ ra",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Mạch giao tiếp relay hình vẽ trên có chức năng:",
  image: "151.png",
  options: [
    "Cho phép điều khiển tải xoay chiều",
    "Cho phép điều khiển tải một chiều",
    "Cách ly giữa mạch công suất và mạch điều khiển",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Trong sơ đồ hình vẽ trên diode D1 có chức năng:",
  image: "152.png",
  options: [
    "Xả dòng trên cuộn dây relay khi transistor ngưng dẫn tránh hư hỏng transistor",
    "Dẫn dòng điện khi ngõ ra điều khiển cung cấp mức logic 1",
    "Tăng dòng điện cung cấp cho tải",
    "Cả ba câu kia đều đúng"
  ],
  answer: "Xả dòng trên cuộn dây relay khi transistor ngưng dẫn tránh hư hỏng transistor"
},
{
  question: "Trong sơ đồ trên, PORT1 sẽ có địa chỉ:",
  image: "153.png",
  options: [
    "A0H",
    "A1H",
    "A4",
    "A2"
  ],
  answer: "A4"
},
{
  question: "Trong sơ đồ trên, PORT1 sẽ có địa chỉ:",
  image: "154.png",
  options: [
    "A0H",
    "A1H",
    "A4H",
    "A3H"
  ],
  answer: "A3H"
},
{
  question: "Trong sơ đồ trên để truy cập tới các cổng vào ra cho phép từ bộ giải mã địa chỉ A7A6 phải có giá trị là:",
  image: "155.png",
  options: [
    "00B",
    "01B",
    "10B",
    "11B"
  ],
  answer: "10B"
},
{
  question: "Trong sơ đồ hình vẽ trên bộ nhớ 2716 có vùng địa chỉ:",
  image: "156.png",
  options: [
    "FF800H - FFFFFH",
    "FF000H - FF7FFH",
    "FF700H - FFFFFH",
    "FF900H - FFFFFH"
  ],
  answer: "FF800H - FFFFFH"
},
{
  question: "Trong sơ đồ trên BUS dữ liệu của CPU là:",
  image: "157.png",
  options: [
    "8 bit",
    "16 bit",
    "32 bit",
    "64 bit"
  ],
  answer: "16 bit"
},
{
  question: "Trong sơ đồ kết nối bộ nhớ hình vẽ trên bộ nhớ #2 có vùng địa chỉ:",
  image: "158.png",
  options: [
    "00000H - 3FFFFH",
    "C0000H - FFFFFH",
    "80000H - BFFFFH",
    "40000H - 7FFFFH"
  ],
  answer: "C0000H - FFFFFH"
},
{
  question: "Trong sơ đồ kết nối bộ nhớ hình vẽ trên bộ nhớ #3 có vùng địa chỉ:",
  image: "159.png",
  options: [
    "00000H - 3FFFFH",
    "C0000H - FFFFFH",
    "80000H - BFFFFH",
    "40000H - 7FFFFH"
  ],
  answer: "80000H - BFFFFH"
},
{
  question: "Trong sơ đồ kết nối bộ nhớ hình vẽ trên sẽ có bao nhiêu bộ nhớ 8KB?",
  image: "160.png",
  options: [
    "56",
    "128",
    "256",
    "512"
  ],
  answer: "128"
},
{
  question: "GPIO (General Purpose Input/Output) là khối chức năng gì trong vi điều khiển?",
  options: [
      "Giao tiếp vào ra số",
      "Biến đổi ADC",
      "Xử lý ngắt",
      "Đa chức năng"
  ],
  answer: "Giao tiếp vào ra số"
},
{
  question: "Trong thư viện HAL (Hardware Abstraction Layer) cho STM32, HAL_Init() được sử dụng để:",
  options: [
      "Khởi động các phần cứng",
      "Cấu hình xung nhịp",
      "Khởi động cấu hình các cấu trúc dữ liệu bên trong thư viện",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Trong thư viện HAL (Hardware Abstraction Layer) cho STM32, GPIO_InitTypeDef là:",
  options: [
      "Cấu trúc dữ liệu để khởi động GPIO",
      "Hàm để khởi động GPIO",
      "Trường thông tin để khởi động GPIO",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cấu trúc dữ liệu để khởi động GPIO"
},
{
  question: "Trong thư viện HAL cho STM32, GPIO_InitStruct.Pin, GPIO_InitStruct.Mode, GPIO_InitStruct.Pull, GPIO_InitStruct.Speed là:",
  options: [
      "Cấu trúc dữ liệu để khởi động GPIO",
      "Hàm để khởi động GPIO",
      "Trường thông tin để khởi động GPIO",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Trường thông tin để khởi động GPIO"
},
{
  question: "Trong thư viện HAL cho STM32, giá trị GPIO_Mode_IN để:",
  options: [
      "Nhận giá trị từ chân GPIO",
      "Thay đổi giá trị ngõ vào của GPIO",
      "Cấu hình GPIO làm chân vào",
      "Tạo chế độ vào cho tất cả chân GPIO"
  ],
  answer: "Cấu hình GPIO làm chân vào"
},
{
  question: "Trong thư viện HAL cho STM32, giá trị GPIO_Mode_OUT để:",
  options: [
      "Cấp giá trị cho chân GPIO",
      "Cấu hình GPIO làm chân ra",
      "Thay đổi giá trị ngõ ra của GPIO",
      "Tạo chế độ ra cho tất cả GPIO"
  ],
  answer: "Cấu hình GPIO làm chân ra"
},
{
  question: "Trong thư viện HAL cho STM32, giá trị GPIO_Mode_AF để:",
  options: [
      "Thay đổi giá trị cung cấp cho chân GPIO",
      "Cấu hình GPIO thay đổi chức năng giữa vào và ra",
      "Cấu hình cho phép chân GPIO sử dụng cho các chức năng khác như USART, SPI, I2C, …",
      "Cấu hình cho chân GPIO là đường vào ra tương tự"
  ],
  answer: "Cấu hình cho phép chân GPIO sử dụng cho các chức năng khác như USART, SPI, I2C, …"
},
{
  question: "Trong thư viện HAL cho STM32, giá trị GPIO_Mode_ANALOG để:",
  options: [
      "Cung cấp tín hiệu tương tự ra chân GPIO",
      "Nhận tín hiệu tương tự từ chân GPIO",
      "Cấu hình cho phép chân GPIO làm chân nhận hoặc cấp tín hiệu tương tự",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Trong thư viện HAL cho STM32, giá trị GPIO_Mode_IT để:",
  options: [
      "Cấu hình cho phép chân GPIO làm chân vào trở kháng cao",
      "Cấu hình cho phép chân GPIO làm chân truyền thông tin",
      "Cấu hình cho phép chân GPIO làm chân nhận thông tin",
      "Cấu hình cho phép chân GPIO làm chân nhận tín hiệu yêu cầu ngắt"
  ],
  answer: "Cấu hình cho phép chân GPIO làm chân nhận tín hiệu yêu cầu ngắt"
},
{
  question: "Trong thư viện HAL cho STM32, biến GPIO_InitStruct.Pull để:",
  options: [
      "Xác định cách kết nối chân GPIO với điện trở kéo lên hoặc kéo xuống",
      "Xác định cách kết nối chân GPIO với điện trở kéo lên",
      "Xác định cách kết nối chân GPIO với điện trở kéo xuống",
      "Xác định cách kết nối chân GPIO không có điện trở kéo lên hoặc kéo xuống"
  ],
  answer: "Xác định cách kết nối chân GPIO với điện trở kéo lên hoặc kéo xuống"
},
{
  question: "Trong thư viện HAL cho STM32, biến GPIO_InitStruct.Pin để:",
  options: [
      "Xác định chân GPIO sẽ được cấu hình",
      "Xác định chân GPIO là ngõ ra",
      "Xác định chân GPIO là ngõ vào",
      "Xác định chân GPIO là trở kháng cao"
  ],
  answer: "Xác định chân GPIO sẽ được cấu hình"
},
{
  question: "Trong thư viện HAL cho STM32, hàm HAL_GPIO_Init() cần truyền biến gì?",
  options: [
      " Biến xác định chân cần khởi động; Biến xác định cấu hình chân cần khởi động",
      "Biến xác định cổng cần khởi động; Biến xác định cấu hình các chân cần khởi động",
      "Biến xác định các chân cần khởi động; Biến xác định cấu hình các chân cần khởi động",
      "Cả ba câu kia đều sai"
  ],
  answer: "Biến xác định cổng cần khởi động; Biến xác định cấu hình các chân cần khởi động"
},
{
  question: "Các bit CNF trong thanh ghi CRL của STM32 sử dụng để:",
  options: [
      "Lập xóa bit các chân GPIO",
      "Cấu hình tốc độ của các chân GPIO",
      "Cấu hình chế độ vào ra của các chân GPIO",
      "Cấu hình điện trở kéo lên kéo xuống của các chân GPIO"
  ],
  answer: "Cấu hình chế độ vào ra của các chân GPIO"
},
{
  question: "Các bit MODE trong thanh ghi CRL của STM32 sử dụng để:",
  options: [
      "Lập xóa bit các chân GPIO",
      "Cấu hình tốc độ của các chân GPIO",
      "Cấu hình chế độ vào ra của các chân GPIO",
      "Cấu hình điện trở kéo lên kéo xuống của các chân GPIO"
  ],
  answer: "Cấu hình tốc độ của các chân GPIO"
},
{
  question: "Thanh ghi GPIOB->ORD của STM32:",
  options: [
      "Là thanh ghi sử dụng 16 bit thấp cung cấp dữ liệu ra PORTB",
      "Là thanh ghi sử dụng 16 bit cao cung cấp dữ liệu ra PORTB",
      "Là thanh ghi sử dụng 32 bit cung cấp dữ liệu ra PORTB",
      "Là thanh ghi sử dụng 32 bit nhận dữ liệu PORTB"
  ],
  answer: "Là thanh ghi sử dụng 16 bit thấp cung cấp dữ liệu ra PORTB"
},
{
  question: "Thanh ghi GPIOA->BSRR của STM32:",
  options: [
      "Dùng 16 bit thấp để reset các bit Port A về 0; 16 bit cao set các bit Port A lên 1",
      "Dùng 16 bit cao để reset các bit Port A về 0, 16 bit thấp set các bit Port A lên 1",
      "Là thanh ghi để reset các bit Port A về 0",
      "Là thanh ghi để set các bit Port A lên 1"
  ],
  answer: "Dùng 16 bit cao để reset các bit Port A về 0, 16 bit thấp set các bit Port A lên 1"
},
{
  question: "Thanh ghi GPIOB->IDR của STM32:",
  options: [
      "Sử dụng 32 bit cao để chứa dữ liệu nhận được từ các chân vào PORTB",
      "Sử dụng 32 bit thấp để chứa dữ liệu nhận được từ các chân vào PORTB",
      "Sử dụng 16 bit cao để chứa dữ liệu nhận được từ các chân vào PORTB",
      "Sử dụng 16 bit thấp để chứa dữ liệu nhận được từ các chân vào PORTB"
  ],
  answer: "Sử dụng 16 bit thấp để chứa dữ liệu nhận được từ các chân vào PORTB"
},
{
  question: "Tham số GPIO_PIN PinState trong hàm HAL_GPIO_WritePin, (GPIOx,GPIO_Pin,PinState) trong STM32 có các giá trị:",
  options: [
      "GPIO_PIN_0 và GPIO_PIN_1",
      "GPIO_PIN_HIGH và GPIO_PIN_LOW",
      "GPIO_PIN_RESET và GPIO_PIN_SET",
      "Cả ba câu kia đều đúng"
  ],
  answer: "GPIO_PIN_RESET và GPIO_PIN_SET"
},
{
  question: "Trong hàm HAL_GPIO_ReadPin() thư viện HAL cho STM32, sẽ có các tham số chỉ thị:",
  options: [
      "Cổng và cấu hình của chân GPIO",
      "Cổng và cấu hình của cổng",
      "Cổng và chân GPIO của cổng",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cổng và chân GPIO của cổng"
},
{
  question: "Tín hiệu RS của text LCD sử dụng để:",
  options: [
      "Chọn thanh ghi dữ liệu hoặc điều khiển khi ghi dữ liệu vào LCD",
      "Chọn thanh ghi dữ liệu hoặc điều khiển khi đọc dữ liệu từ LCD",
      "Chọn thanh ghi trạng thái hoặc điều khiển khi ghi dữ liệu vào LCD",
      "Chọn thanh ghi trạng thái hoặc điều khiển khi đọc dữ liệu từ LCD"
  ],
  answer: "Chọn thanh ghi dữ liệu hoặc điều khiển khi ghi dữ liệu vào LCD"
},
{
  question: "Trước khi gửi dữ liệu hiển thị lên LCD có thể khởi động bằng các lệnh nào?",
  options: [
      "0x38; 0x0E",
      "0x06; 0xC0",
      "0x10; 0x14",
      "0x18; 0x1C"
  ],
  answer: "0x18; 0x1C"
},
{
  question: "Các thanh ghi cho ADC của STM32 là:",
  options: [
      "ADC_CR1, ADC_CR2 (Control Register 1, 2); ADC_SMR (Sample Time Register); ADC_DR (Data Register); ADC_CCR (Common Control Register); ADC_ISR (Status Register) và ADC_IER (Interrupt Enable Register)",
      "ADC_CR1, ADC_SMPR, ADC_DR, ADC_ISR",
      "ADC_CR1, ADC_CCR, ADC_ISR",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các thanh ghi sử dụng cho I2C của STM32 bao gồm:",
  options: [
      "I2C_CR1; I2C_CR2; I2C_OAR1; I2C_OAR2; I2C_DR; I2C_SR1; I2C_SR2; I2C_CCR; I2C_TRISE; I2C_FLTR",
      "I2C_CR1; I2C_CR2; I2C_OAR1; I2C_DR1; I2C_DR2; I2C_SR1; I2C_SR2; I2C_CCR; I2C_TRISE; I2C_FLTR",
      "I2C_CR1; I2C_CR2; I2C_OAR1; I2C_OAR2; I2C_DR; I2C_SR1; I2C_CCR; I2C_TRISE",
      "Cả ba câu kia đều đúng"
  ],
  answer: "I2C_CR1; I2C_CR2; I2C_OAR1; I2C_OAR2; I2C_DR; I2C_SR1; I2C_SR2; I2C_CCR; I2C_TRISE; I2C_FLTR"
},
{
  question: "Các thanh ghi sử dụng cho USART của STM32 bao gồm:",
  options: [
      "USART_CR1; USART_CR2; USART_BRR; USART_DR; USART_SR1; USART_SR2",
      "USART_CR1; USART_CR2; USART_BRR; USART_BRR2;USART_DR; USART_SR ",
      "USART_CR1; USART_CR2; USART_CR2; USART_CR3; USART_BRR; USART_DR; USART_SR",
      "Cả ba câu kia đều đúng"
  ],
  answer: "USART_CR1; USART_CR2; USART_CR2; USART_CR3; USART_BRR; USART_DR; USART_SR"
},
{
  question: "Các tham số khởi động (Initialization) cho một GPIO:",
  options: [
      "Khởi động là ngõ vào hoặc ngõ ra, giá trị ban đầu",
      "Khởi động Pull Up, Pull Down, Open, Floating, …",
      "Khởi động các chức năng: Ngắt, vào ra ADC, tạo xung, …",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các chức năng thường thấy của LED trong các hệ thống nhúng:",
  options: [
      "Thông báo hệ thống đã được cấp nguồn",
      "Thông báo trạng thái hoạt động: mở, đóng, …",
      "Thông báo chế độ hoạt động: chạy, dừng, lỗi, …",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các chức năng thường thấy của nút nhấn trong các hệ thống nhúng:",
  options: [
      "Thực hiện tác vụ điều khiển, xác nhận hành động",
      "Nhập tham số, dữ liệu hoạt động",
      "Thiết lập cấu hình: chế độ, tần số, …",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Các chức năng thường thấy của LED 7 đoạn trong các hệ thống nhúng:",
  options: [
      "Hiển thị các con số cho: đồng hồ, dữ liệu đo lường, kết quả phép tính, giá trị tham số hệ thống, số lượng sản phẩm",
      "Hiển thị ký tự thông báo: trạng thái hệ thống, chế độ hoạt động, …",
      "Hiển thị các bản cho: Tên sản phẩm, thông báo, …",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "So sánh ưu nhược điểm của LCD so với LED 7 đoạn trong các hệ thống nhúng:",
  options: [
      "Hiển thị văn bản đồ họa ít phong phú, ít màu sắc hơn",
      "Tiêu thụ công cao hơn",
      "Đáp ứng nhanh hơn",
      "Góc nhìn rộng hơn"
  ],
  answer: "Đáp ứng nhanh hơn"
},
{
  question: "GPIOB->CRL=(3<<0)| (3<<4)| (3<<8)|(3<<12) Dòng lệnh lập trình thanh ghi CRL của STM32 ở trên thực hiện:",
  options: [
      "Cấu hình các chân PB0; PB1; PB2; PB3 của STM32 ở chế độ output push pull max speed 50Hz",
      "Cấu hình các chân PB0; PB4; PB8; PB12 của STM32 ở chế độ output push pull max speed 50Hz",
      "Cấu hình các chân PB0; PB1; PB2; PB3 của STM32 ở chế độ output open drain max speed 50Hz",
      "Cấu hình các chân PB0; PB4; PB8; PB12 của STM32 ở chế độ output open drain max speed 50Hz"
  ],
  answer: "Cấu hình các chân PB0; PB1; PB2; PB3 của STM32 ở chế độ output push pull max speed 50Hz"
},
{
  question: "GPIOA->CRL=(8<<0)| (8<<4)| (8<<8) Dòng lệnh lập trình thanh ghi CRL của STM32 ở trên thực hiện:",
  options: [
      "Cấu hình chân PA2 input pull down",
      "Cấu hình chân PA0, PA1, PA2 input pull up",
      "Cấu hình chân PA0, PA1, PA2 input floating",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "GPIOC->ODR=(1<<7)| (1<<8)|(1<<9) Dòng lệnh lập trình thanh ghi ODR của STM32 ở trên thực hiện:",
  options: [
      "Cung cấp bit 0 ra các chân 7, 8, 9 của PORTC",
      "Cung cấp bit 1 ra các chân 7, 8, 9 của PORTC",
      "Cấu hình các chân 7, 8, 9 PORTC là ngõ ra",
      "Cấu hình các chân 7, 8, 9 PORTC là ngõ vào"
  ],
  answer: "Cung cấp bit 1 ra các chân 7, 8, 9 của PORTC"
},
{
  question: "GPIOC->BSRR =(1<<23)|(8<<24)|(8<<25) Dòng lệnh lập trình thanh ghi BSRR của STM32 ở trên thực hiện:",
  options: [
      "Để đưa chân 7, 8, 9 PORTC lên mức cao",
      "Để đưa chân 23, 24, 25 PORTC lên mức cao",
      "Để đưa chân 23, 24, 25 PORTC về mức thấp",
      "Để đưa chân 7, 8, 9 PORTC về mức thấp"
  ],
  answer: "Để đưa chân 7, 8, 9 PORTC về mức thấp"
},
{
  question: "Một LED gắn vào cổng ra vi điều khiển nối tiếp với 1 điện trở, biết điện áp mức cao ngõ ra là 5V, điện áp rơi trên LED khi sáng là 3V, dòng qua LED là 20mA, điện trở cần có giá trị bằng bao nhiêu?",
  options: [
      "100Ω",
      "150Ω",
      "200Ω",
      "250Ω"
  ],
  answer: "100Ω"
},
{
  question: "Các lệnh nào sau đây của ARM thực hiện việc rẽ nhánh chương trình?",
  options: [
      "B,BL",
      "BX,BLX",
      "BXJ",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Cả ba câu kia đều đúng"
},
{
  question: "Trong các lệnh chế độ ARM, mã điều kiện sẽ chiếm độ dài",
  options: [
      "2 bit",
      "4 bit",
      "6 bit",
      "8 bit"
  ],
  answer: "4 bit"
},
{
  question: "Trong các lệnh chế độ THUMB của ARM, mã điều kiện sẽ chiếm độ dài là:",
  options: [
      "2",
      "4",
      "6",
      "Không có mã điều kiện trong lệnh"
  ],
  answer: "2"
},
{
  question: "Mã điều kiện trong các lệnh ARM được sử dụng để làm gì?",
  options: [
      "Xét điều kiện sau khi thực hiện lệnh",
      "Xác định lệnh có được thực hiện không",
      "Quản lý các điều kiện của chương trình",
      "Quản lý biến số trong chương trình"
  ],
  answer: "Xét điều kiện sau khi thực hiện lệnh"
},
{
  question: "ARM7 có bao nhiêu mã điều kiện?",
  options: [
      "10",
      "15",
      "12",
      "17"
  ],
  answer: "15"
},
{
  question: "Mã điều kiện trong một lệnh của ARM khi xét là của:",
  options: [
      "Lệnh không có hậu tố S, vừa thực hiện trước đó",
      "Sau khi thực hiện dòng lệnh",
      "Của một lệnh số học",
      "Của một lệnh logic"
  ],
  answer: "Sau khi thực hiện dòng lệnh"
},
{
  question: "Khi lệnh có mã điều kiện HS nó sẽ thực hiện khi:",
  options: [
      "Kết quả lệnh so sánh trước đó là nhỏ hơn hoặc bằng",
      "Kết quả lệnh so sánh trước đó là lớn hơn",
      "Kết quả lệnh so sánh trước đó là lớn hơn hoặc bằng",
      "Kết quả lệnh so sánh trước đó là nhỏ hơn"
  ],
  answer: "Kết quả lệnh so sánh trước đó là lớn hơn hoặc bằng"
},
{
  question: "Điều kiện 'EQ' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Bằng nhau",
      "Lớn hơn",
      "Lớn hơn hoặc bằng",
      "Không bằng"
  ],
  answer: "Bằng nhau"
},
{
  question: "Điều kiện 'NE' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Bằng nhau",
      "Lớn hơn",
      "Lớn hơn hoặc bằng",
      "Không bằng"
  ],
  answer: "Không bằng"
},
{
  question: "Điều kiện 'MI' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Tràn số",
      "Số âm",
      "Số dương",
      "Tràn bit"
  ],
  answer: "Số âm"
},
{
  question: "Điều kiện 'PL' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Lớn hơn hoặc bằng",
      "Số dương",
      "Nhỏ hơn hoặc bằng",
      "Tràn bit"
  ],
  answer: "Số dương"
},
{
  question: "Điều kiện 'VS' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Tràn",
      "Không tràn",
      "Nhớ",
      "Không nhớ"
  ],
  answer: "Tràn"
},
{
  question: "Điều kiện 'VC' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Tràn",
      "Không tràn",
      "Nhớ",
      "Không nhớ"
  ],
  answer: "Không tràn"
},
{
  question: "Điều kiện 'HI' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Lớn hơn không tính dấu",
      "Lớn hơn có tính dấu",
      "Lớn hơn hoặc bằng có tính dấu",
      "Lớn hơn hoặc bằng không tính dấu"
  ],
  answer: "Lớn hơn không tính dấu"
},
{
  question: "Điều kiện 'LS' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Nhỏ hơn không tính dấu",
      "Nhỏ hơn có tính dấu",
      "Nhỏ hơn hoặc bằng có tính dấu",
      "Nhỏ hơn hoặc bằng không tính dấu"
  ],
  answer: "Nhỏ hơn hoặc bằng có tính dấu"
},
{
  question: "Điều kiện 'GE' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Lớn hơn không tính dấu",
      "Lớn hơn có tính dấu",
      "Lớn hơn hoặc bằng có tính dấu",
      "Lớn hơn hoặc bằng không tính dấu"
  ],
  answer: "Lớn hơn hoặc bằng có tính dấu"
},
{
  question: "Điều kiện 'LE' trong lệnh ARM dùng để kiểm tra điều gì?",
  options: [
      "Nhỏ hơn không tính dấu",
      "Nhỏ hơn có tính dấu",
      "Nhỏ hơn hoặc bằng có tính dấu",
      "Nhỏ hơn hoặc bằng không tính dấu"
  ],
  answer: "Nhỏ hơn hoặc bằng có tính dấu"
},
{
  question: "Trong mã điều kiện ARM, điều kiện 'GT' có ý nghĩa gì?",
  options: [
      "Lớn hơn không tính dấu",
      "Lớn hơn có tính dấu",
      "Lớn hơn hoặc bằng có tính dấu",
      "Lớn hơn hoặc bằng không tính dấu"
  ],
  answer: "Lớn hơn có tính dấu"
},
{
  question: "Trong mã điều kiện ARM, điều kiện 'AL' có ý nghĩa gì?",
  options: [
      "Lặp vô hạn",
      "Luôn luôn đúng",
      "Luôn không đúng",
      "Cảnh báo"
  ],
  answer: "Luôn luôn đúng"
},
{
  question: "Tiền tố S trong một lệnh Parallel của ARM có ý nghĩa gì?",
  options: [
      "Duy trì dấu của kết quả phép tính chia dư",
      "Kết quả phép tính chia dư sẽ luôn dương",
      "Kết quả phép tính chia dư sẽ luôn âm",
      "Không duy trì dấu của kết quả phép tính chia dư"
  ],
  answer: "Duy trì dấu của kết quả phép tính chia dư"
},
{
  question: "Tiền tố Q trong một lệnh Arithmetic Parallel của ARM có ý nghĩa gì?",
  options: [
      "Chấp nhận kết quả phép tính số học có tràn",
      "Đảm bảo kết quả của các phép tính nằm trong khoảng giá trị được xác định, thường là giá trị tối thiểu và tối đa mà kiểu dữ liệu có thể biểu diễn",
      "Kết quả phép tính số học là bão hòa theo khả năng của thanh ghi",
      "Cả ba câu kia đều đúng"
  ],
  answer: "Kết quả phép tính số học là bão hòa theo khả năng của thanh ghi"
},
{
  question: "Tiền tố U trong một lệnh Arithmetic Parallel của ARM có ý nghĩa gì?",
  options: [
    "Duy trì dấu của kết quả phép tính chia dư",
    "Kết quả phép tính chia dư sẽ luôn dương",
    "Kết quả phép tính chia dư sẽ luôn âm",
    "Không duy trì dấu của kết quả phép tính chia dư"
  ],
  answer: "Không duy trì dấu của kết quả phép tính chia dư"
},
{
  question: "Tiền tố SH trong một lệnh Arithmetic Parallel của ARM có ý nghĩa gì?",
  options: [
    "Thực hiện các phép tính số học có dấu",
    "Thực hiện các phép tính số học không dấu",
    "Thực hiện các phép tính số học có dấu dương",
    "Thực hiện các phép tính số học có dấu âm"
  ],
  answer: "Thực hiện các phép tính số học có dấu"
},
{
  question: "Chế độ địa chỉ gián tiếp thanh ghi của ARM sử dụng thanh ghi để:",
  options: [
    "Chứa địa chỉ bộ nhớ cần truy cập",
    "Chứa dữ liệu cần truy cập",
    "Giữ độ dời địa chỉ dữ liệu cần truy cập",
    "Giữ giá trị dịch của địa chỉ"
  ],
  answer: "Chứa địa chỉ bộ nhớ cần truy cập"
},
{
  question: "Lệnh ldr r0, [r1] thực hiện:",
  options: [
    "Lấy giá trị trong r1 vào thanh ghi r0",
    "Lấy giá trị trong ô nhớ có địa chỉ giữ trong r1 vào thanh ghi r0",
    "Lấy giá trị trong r0 vào thanh ghi r1",
    "Lấy giá trị trong ô nhớ có địa chỉ giữ trong r0 vào thanh ghi r1"
  ],
  answer: "Lấy giá trị trong ô nhớ có địa chỉ giữ trong r1 vào thanh ghi r0"
},
{
  question: "Trong các lệnh của ARM, toán hạng tức thời (immediate) được:",
  options: [
    "Giữ trong một ô nhớ dữ liệu",
    "Giữ trong một thanh ghi",
    "Mã hóa trong mã lệnh",
    "Nằm trong ngăn xếp"
  ],
  answer: "Mã hóa trong mã lệnh"
},
{
  question: "Trong chế độ thanh ghi với độ dời tức thời (Register with immediate offset) của ARM, địa chỉ của dữ liệu cần truy cập là:",
  options: [
    "Giá trị của thanh ghi cộng hoặc trừ đi một giá trị được mã hóa trong lệnh",
    "Giá trị của một thanh ghi được nạp một giá trị mã hóa trong lệnh",
    "Một giá trị được mã hóa trong lệnh",
    "Không có địa chỉ trong chế độ này"
  ],
  answer: "Giá trị của thanh ghi cộng hoặc trừ đi một giá trị được mã hóa trong lệnh"
},
{
  question: "Khi r1 = 1000, lệnh ldr r0, [r1, #8] thực hiện:",
  options: [
    "Lấy giá trị trong ô nhớ có địa chỉ 1000 vào thanh ghi r0 sau đó cộng với 8",
    "Lấy giá trị trong ô nhớ có địa chỉ 1008 vào thanh ghi r0",
    "Lấy giá trị 1008 vào thanh ghi r1",
    "Lấy giá trị 1008 vào thanh ghi r0"
  ],
  answer: "Lấy giá trị trong ô nhớ có địa chỉ 1008 vào thanh ghi r0"
},
{
  question: "Trong chế độ thanh ghi với độ dời thanh ghi (Register with register offset) của ARM, địa chỉ của dữ liệu cần truy cập là:",
  options: [
    "Giá trị hai thanh ghi cộng hoặc trừ với nhau",
    "Giá trị của thanh ghi cơ sở (base)",
    "Giá trị của thanh ghi độ dời",
    "Không có địa chỉ trong chế độ này"
  ],
  answer: "Giá trị hai thanh ghi cộng hoặc trừ với nhau"
},
{
  question: "Lệnh ldr r0, [r1, r2] thực hiện:",
  options: [
    "Lấy giá trị r1 + r2 vào thanh ghi r0",
    "Lấy giá trị trong ô nhớ có địa chỉ r1 + r2 vào thanh ghi r0",
    "Ghi giá trị trong r0 vào địa chỉ r1 + r2",
    "Lấy giá trị trong ô nhớ có địa chỉ giữ trong r1 vào r0 sau đó cộng với r2"
  ],
  answer: "Lấy giá trị trong ô nhớ có địa chỉ r1 + r2 vào thanh ghi r0"
},
{
  question: "Toán hạng LSL #10 thực hiện:",
  options: [
    "Nạp giá trị 10 vào thanh ghi",
    "Lấy giá trị trong ô nhớ có địa chỉ LSL + 10",
    "Dịch phải logic thanh ghi độ dời 10 bit",
    "Dịch trái logic thanh ghi độ dời 10 bit"
  ],
  answer: "Dịch trái logic thanh ghi độ dời 10 bit"
},
{
  question: "Toán hạng LSR #10 thực hiện:",
  options: [
    "Nạp giá trị 10 vào thanh ghi",
    "Lấy giá trị trong ô nhớ có địa chỉ LSR + 10",
    "Dịch phải logic thanh ghi độ dời 10 bit",
    "Dịch trái logic thanh ghi độ dời 10 bit"
  ],
  answer: "Dịch phải logic thanh ghi độ dời 10 bit"
},
{
  question: "Toán hạng ASR #10 thực hiện:",
  options: [
    "Nạp giá trị 10 vào thanh ghi ASR",
    "Lấy giá trị trong ô nhớ có địa chỉ ASR + 10",
    "Dịch phải số học thanh ghi độ dời đi 10 bit",
    "Dịch phải logic thanh ghi độ dời 10 bit"
  ],
  answer: "Dịch phải số học thanh ghi độ dời đi 10 bit"
},
{
  question: "Toán hạng ROR #10 thực hiện:",
  options: [
    "Nạp giá trị 10 vào thanh ghi",
    "Quay phải thanh ghi độ dời 10 bit",
    "Dịch phải thanh ghi độ dời đi 10 bit",
    "Lấy giá trị trong ô nhớ có địa chỉ ROR + 10"
  ],
  answer: "Quay phải thanh ghi độ dời 10 bit"
},
{
  question: "Toán hạng RRX thực hiện:",
  options: [
    "Quay phải dữ liệu 33 bit",
    "Quay phải dữ liệu 32 bit",
    "Quay phải dữ liệu 16 bit",
    "Quay phải dữ liệu 8 bit"
  ],
  answer: "Quay phải dữ liệu 32 bit"
},
{
  question: "Chế độ địa chỉ thanh ghi với thanh ghi độ dời tỷ lệ (Register with scaled register offset), địa chỉ dữ liệu cần truy cập là:",
  options: [
    "Tổng thanh ghi cơ sở và thanh ghi độ dời đã được cộng thêm một giá trị",
    "Tổng thanh ghi cơ sở và thanh ghi độ dời đã được chia tỷ lệ",
    "Tổng thanh ghi cơ sở và thanh ghi độ dời đã được trừ đi một giá trị",
    "Tổng giữa thanh ghi cơ sở với thanh ghi độ dời đã được quay dịch"
  ],
  answer: "Tổng thanh ghi cơ sở và thanh ghi độ dời đã được chia tỷ lệ"
},
{
  question: "Lệnh ldr r0, [r1, r2, LSL #2] thực hiện:",
  options: [
    "Lấy giá trị trong ô nhớ có địa chỉ [(r1+r2)<<2)]",
    "Lấy giá trị trong ô nhớ có địa chỉ [r1+(r2<<2)]",
    "Lấy giá trị trong ô nhớ có địa chỉ [(r1+r2+LSL)<<2]",
    "Lấy giá trị trong ô nhớ có địa chỉ [r1+r2+LSL<<2]"
  ],
  answer: "Lấy giá trị trong ô nhớ có địa chỉ [r1+(r2<<2)]"
},
{
  question: "Lệnh ldr r0, [r1, -r2, ASR #2] thực hiện:",
  options: [
    "Lấy giá trị trong ô nhớ có địa chỉ [(r1-r2)>>2)]",
    "Lấy giá trị trong ô nhớ có địa chỉ [r1-(r2>>2)]",
    "Lấy giá trị trong ô nhớ có địa chỉ [(r1-r2+ASL)<<2]",
    "Lấy giá trị trong ô nhớ có địa chỉ [r1-r2+ASL<<2]"
  ],
  answer: "Lấy giá trị trong ô nhớ có địa chỉ [r1-(r2>>2)]"
},
{
  question: "Chỉ thị chỉ số trước (Pre-Indexed) trong lệnh ARM thực hiện việc:",
  options: [
    "Thay đổi thanh ghi chứa địa chỉ bộ nhớ trước khi truy cập.",
    "Thay đổi giá trị dữ liệu bộ nhớ trước khi truy cập.",
    "Thay đổi thanh ghi chứa địa chỉ bộ nhớ trước khi truy cập.",
    "Thay đổi giá trị dữ liệu bộ nhớ sau khi truy cập."
  ],
  answer: "Thay đổi thanh ghi chứa địa chỉ bộ nhớ trước khi truy cập."
},
{
  question: "Lệnh ldr r0, [r1, #4]! thực hiện:",
  options: [
    "r1 = r1 + 4; r0 = [r1]",
    "r0 = [r1]; r1 = r1 + 4",
    "r1 = r1 + 4; [r1] = r0",
    "[r1] = r0; r1 = r1 + 4"
  ],
  answer: "r0 = [r1]; r1 = r1 + 4"
},
{
  question: "Lệnh ldr r0, [r1, r2, LSL #2]! thực hiện:",
  options: [
    "r0 = [r1]; r1 = r1 + (r2 << 2)",
    "r1 = (r1 + r2) << 2; r0 = [r1]",
    "r0 = [r1]; r1 = (r1 + r2) << 2",
    "r1 = r1 + (r2 << 2); r0 = [r1]"
  ],
  answer: "r1 = r1 + (r2 << 2); r0 = [r1]"
},
{
  question: "Chỉ thị chỉ số sau (Post-Indexed) trong lệnh ARM thực hiện việc:",
  options: [
    "Thay đổi thanh ghi chứa địa chỉ bộ nhớ sau khi truy cập.",
    "Thay đổi giá trị dữ liệu bộ nhớ trước khi truy cập.",
    "Thay đổi thanh ghi chứa địa chỉ bộ nhớ trước khi truy cập.",
    "Thay đổi giá trị dữ liệu bộ nhớ sau khi truy cập."
  ],
  answer: "Thay đổi thanh ghi chứa địa chỉ bộ nhớ sau khi truy cập."
},
{
  question: "Lệnh ldr r0, [r1], #4 thực hiện:",
  options: [
    "r1 = r1 + 4; r0 = [r1]",
    "r0 = [r1]; r1 = r1 + 4",
    "r1 = r1 + 4; [r1] = r0",
    "[r1] = r0; r1 = r1 + 4"
  ],
  answer: "r0 = [r1]; r1 = r1 + 4"
},
{
  question: "Lệnh ldr r0, [r1], r2, LSL #2 thực hiện:",
  options: [
    "r0 = [r1]; r1 = r1 + (r2 << 2)",
    "r1 = (r1 + r2) << 2; r0 = [r1]",
    "r0 = [r1]; r1 = (r1 + r2) << 2",
    "r1 = r1 + (r2 << 2); r0 = [r1]"
  ],
  answer: "r0 = [r1]; r1 = r1 + (r2 << 2)"
},
{
  question: "Khi ARM sử dụng PC làm thanh ghi cơ sở truy cập bộ nhớ thì:",
  options: [
    "Có thể sử dụng Post– Index",
    "Có thể sử dụng Pre – Index",
    "Không thể sử dụng Post – Index và Pre - Index",
    "Sử dụng Post-Index và Pre-Index đồng thời trong một lệnh"
  ],
  answer: "Không thể sử dụng Post – Index và Pre - Index"
},
{
  question: "Lệnh ldr r3, [pc, #5] thực hiện:",
  options: [
    "Lấy giá trị trong ô nhớ có địa chỉ pc+5 vào",
    "Lấy giá trị trong ô nhớ có địa chỉ pc vào r3 sau đó cộng với 5",
    "Ghi giá trị của r3 vào ô nhớ có địa chỉ pc+5",
    "Ghi giá trị của r3 + 5 vào ô nhớ có địa chỉ pc"
  ],
  answer: "Lấy giá trị trong ô nhớ có địa chỉ pc+5 vào"
},
{
  question: "Lệnh ldr Rd, =imm32 thực hiện:",
  options: [
    "Nạp hằng số chứa trong bộ nhớ chương trình vào thanh ghi",
    "Nạp hằng số tức thời vào thanh ghi",
    "Ghi giá trị tức thời vào bộ nhớ chương trình",
    "Ghi giá trị tức thời vào vùng nhớ dữ liệu"
  ],
  answer: "Nạp hằng số tức thời vào thanh ghi"
},
{
  question: "Sau các lệnh:\n MOV R0, #42;\n MOV R1, #255;\n ADD R0, R0, R1;\n Thanh ghi R0 có giá trị là:",
  options: ["297", "42", "255", "Không xác định"],
  answer: "297"
},
{
  question: "Sau các lệnh:\n MOV R0, #42;\n MOV R1, #255;\n ADD R0, R0, R1;\n Thanh ghi R1 có giá trị là:",
  options: ["297", "42", "255", "Không xác định"],
  answer: "255"
},
{
  question: "Sau các lệnh:\n MOV R0, #42;\n MOV R1, #255;\n SUB R1, R1, R0;\n Thanh ghi R1 có giá trị là:",
  options: ["255", "42", "213", "Không xác định"],
  answer: "213"
},
{
  question: "Sau các lệnh:\n MOV R0, #42;\n MOV R1, #255;\n SUB R1, R1, R0;\n Thanh ghi R0 có giá trị là:",
  options: ["255", "42", "213", "Không xác định"],
  answer: "42"
},
{
  question: "Sau các lệnh: MOV R0, #42;\n MOV R1, #255;\n MVN R0, R1;\n Thanh ghi R0 có giá trị là:",
  options: ["0", "42", "255", "Không xác định"],
  answer: "0"
},
{
  question: "Sau khi thực hiện lệnh:\n MOV R0, #42;\n TST R0, #10;\n Thanh ghi R0 có giá trị là:",
  options: ["10", "0", "42", "Không xác định"],
  answer: "42"
},
{
  question: "Sau khi thực hiện lệnh:\n MOV R0, #42;\n TST R0, #10;\n Lệnh rẽ nhánh nào sẽ thực hiện rẽ nhánh chương trình:",
  options: ["BEQ", "BNE", "BVS", "BLT"],
  answer: "BNE"
},
{
  question: "Sau khi thực hiện lệnh:\n MOV R0, #42;\n EOR R0, R0, R0;\n Thanh ghi R0 có giá trị là:",
  options: ["84", "0", "42", "Không xác định"],
  answer: "0"
},
{
  question: "Sau khi thực hiện lệnh:\n MOV R0, #42;\n AND R0, R0, #0xFF;\n Thanh ghi R0 có giá trị là:",
  options: ["84", "0", "42", "Không xác định"],
  answer: "42"
},
{
  question: "Sau khi thực hiện lệnh:\n MOV R0, #42;\n AND R0, R0, #0;\n Thanh ghi R0 có giá trị là:",
  options: ["84", "0", "42", "Không xác định"],
  answer: "0"
},
{
  question: "Sau khi thực hiện lệnh:\n MOV R0, #42;\n ORR R0, R0, #0xFF;\n Thanh ghi R0 có giá trị là:",
  options: ["84", "0XFF", "42", "Không xác định"],
  answer: "0XFF"
},
{
  question: "Sau khi thực hiện lệnh:\n MOV R0, #42;\n ORR R0, R0, #0;\n Thanh ghi R0 có giá trị là:",
  options: ["84", "0XFF", "42", "Không xác định"],
  answer: "42"
},
{
  question: "Lệnh STR R0, [R1] thực hiện:",
  options: [
    "Lưu giá trị thanh ghi R1 vào thanh ghi R0",
    "Lưu giá trị thanh ghi R1 ô nhớ có địa chỉ giữ trong R0",
    "Lưu giá trị thanh ghi R0 ô nhớ có địa chỉ giữ trong R1",
    "Lấy giá trị trong ô nhớ có địa chỉ giữ trong R1 vào thanh ghi R0"
  ],
  answer: "Lưu giá trị thanh ghi R0 ô nhớ có địa chỉ giữ trong R1"
},
{
  question: "Sau khi thực hiện lệnh:\n MOV R0, #42;\n CMP R0, #10;\n Lệnh rẽ nhánh nào sẽ thực hiện rẽ nhánh chương trình:",
  options: ["BEQ", "BGT", "BVS", "BLT"],
  answer: "BGT"
},
{
  question: "foo:\n ADD R0, R1, R2;\n BX LR;\nMAIN:\n MOV R1, #5;\n MOV R2, #3;\n BL foo\nTrong đoạn chương trình trên sau khi thực hiện lệnh “BX LR” điều khiển chương trình sẽ:",
  options: [
    "Chuyển về sau lệnh “BL foo”",
    "Chuyển về nhãn MAIN",
    "Chuyển về nhãn foo",
    "Chuyển tới lệnh “BL LR”"
  ],
  answer: "Chuyển về sau lệnh “BL foo”"
},
{
  question: "thumb foo:    ADD R1, R1, #5 BX LR ;   .code 32 MAIN:    MOV R2,#10;    MOV R1, #12 ;     BLX foo ;     MOV R2,R1 Sau khi thực hiện đoạn chương trình trên R2 có giá trị bằng bao nhiêu?  ;",
  options: ["#17", "#15", "#10", "#5"],
  answer: "#17"
},
{
  question: "Sau khi thực hiện lệnh: MOV R0, #42; EOR R0, R0, #0xFF; Thanh ghi R0 có giá trị là:",
  options: ["84", "24", "42", "00"],
  answer: "42"
}











  
  
  

  // Add more questions here
];

// Render quiz questions and options
const quizContainer = document.getElementById("quiz-container");

// Duyệt qua dữ liệu câu hỏi để hiển thị
quizData.forEach((item, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerText = `${index + 1}. ${item.question}`;

  // Kiểm tra nếu có ảnh trong câu hỏi
  if (item.image) {
    const imageElement = document.createElement("img");
    imageElement.src = item.image;  // Đường dẫn ảnh
    imageElement.alt = "Harvard architecture";  // Chú thích ảnh
    imageElement.style.maxWidth = "100%";  // Điều chỉnh kích thước ảnh nếu cần
    questionDiv.appendChild(imageElement);  // Thêm ảnh vào câu hỏi
  }

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");
  
  item.options.forEach((option, i) => {
    const optionDiv = document.createElement("div");
    optionDiv.innerText = option;
    optionDiv.addEventListener("click", () => handleOptionClick(optionDiv, item.answer, option));
    optionsDiv.appendChild(optionDiv);
  });

  quizContainer.appendChild(questionDiv);
  quizContainer.appendChild(optionsDiv);
});

// Hàm xử lý khi người dùng chọn đáp án
function handleOptionClick(optionDiv, correctAnswer, selectedAnswer) {
  // Đánh dấu đáp án đúng hay sai
  if (selectedAnswer === correctAnswer) {
    optionDiv.classList.add("correct");
  } else {
    optionDiv.classList.add("wrong");
    // Tùy chọn làm nổi bật đáp án đúng
    Array.from(optionDiv.parentNode.children).forEach(div => {
      if (div.innerText === correctAnswer) {
        div.classList.add("correct");
      }
    });
  }
}

// Hàm xử lý khi người dùng nhấn nút Submit
document.getElementById("submit-btn").addEventListener("click", () => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Bạn đã hoàn thành bài thi!";
});

// Thêm câu hỏi đầu tiên vào body (ví dụ cho câu hỏi 0)
const questionElement = document.createElement("div");
questionElement.innerHTML = `
  <p>${quizData[0].question}</p>
  <img src="${quizData[0].image}" alt="Harvard architecture" style="max-width: 100%; height: auto;" />
  <ul>
    ${quizData[0].options.map(option => `<li>${option}</li>`).join('')}
  </ul>
`;
document.body.appendChild(questionElement);