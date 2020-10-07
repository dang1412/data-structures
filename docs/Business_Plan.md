# Codetube.vn Business Plan

## Tổng quan về sản phẩm

**Nền tảng chia sẻ kiến thức thương mại hóa**: Chúng tôi cung cấp nền tảng chia sẻ kiến thức IT cho cộng đồng, trong đó nổi bật là tính năng hỗ trợ người dùng tạo nội dung với các thành phần tương tác trực quan sinh động có sẵn. Với khả năng mở rộng linh hoạt ngoài thành phần chủ đạo ban đầu là mô phỏng thuật toán, người dùng còn được hỗ trợ để có thể tạo ra tài liệu đa dạng và sinh động bao gồm các thành phần UI phức tạp như vẽ đồ thị, tabs, slideshow, code editor, blockly... trong bài chỉ bằng cách viết Markdown. Nội dung được chia sẻ dưới hình thức bài viết, bài học hoặc khoá học có thể thương mại hoá nhằm tạo động lực tối đa cho tác giả sáng tạo ra những nội dung chất lượng phục vụ cộng đồng. Giáo viên có thể tạo bài giảng, bài test câu hỏi trắc nghiệm, coding test, học sinh trả lời, code, debug và nộp bài...tất cả ngay trong phạm vi 1 bài viết nhanh chóng và thuận tiện.

```[maineditor](height=300px)
# This is our markdown editor

- User create content by writing markdown
- We provide special syntax which can render:
  - Algorithm visualization
  - Code IDE
  - Blockly IDE
  - Slideshow
  - Tabs

*Please edit this, click `Preview` button and see result.*
```

**Vấn đề**: Ngành công nghệ thông tin đã đang và sẽ tiếp tục phát triển trong nhiều thập kỷ tới và đóng vai trò quan trọng trong cuộc sống hàng ngày của con người. Bởi vậy việc học lập trình cũng như thuật toán đang dần phổ cập cho tất cả mọi đối tượng ngay từ bậc học sinh cấp tiểu học. Tuy nhiên việc học thuật toán theo cách truyển thống với cách diễn giải chủ yếu bằng chữ và 1 vài hình ảnh tĩnh là khá thách thức đối với người học đặc biệt đối với những thuật toán khó bao gồm nhiều bước chuyển đổi trạng thái phức tạp. Từ đó dẫn đến việc người học mất hứng thú dễ dàng bỏ cuộc hoặc phải bỏ ra rất nhiều công sức và thời gian để học, nắm bắt và vận dụng, kể cả đối với học sinh hay các kỹ sư đã đi làm. Cùng với đó là khó khăn cho người giáo viên để có thể làm ra tài liệu vừa ngắn gọn, dễ hiểu cho những vấn đề phức tạp và gây được hứng thú đối với học viên, đặc biệt trong bối cảnh học tập từ xa đang trở thành xu hướng như hiện nay.

**Giải pháp**: Chúng tôi xuất thân là sinh viên IT và sau này trở thành lập trình viên, hiểu rất rõ vấn đề này và dựa trên nhiều năm kinh nghiệm của mình đã nghĩ ra giải pháp hiệu quả hơn để học thuật toán đó là lập trình mô phỏng hoạt động của thuật toán bao gồm từng trạng thái và cách chuyển trạng thái thuật toán 1 cách trực quan và tổng quát cho tất cả các trường hợp dựa trên input của người dùng, người dùng tương tác để chuyển đến bất kỳ trạng thái nào mong muốn từ đó dễ dàng kiểm chứng, hiểu rõ hơn và nắm bắt từng khía cạnh của thuật toán, các case thông thường, case đặc biệt...thay vì phải đọc các lý giải bằng chữ rất dài và khó hình dung. Ngoài ra để tăng khả năng mở rộng và chuyên biệt hoá từng công đoạn chúng tôi đóng gói các mô phỏng trực quan này và cho phép người dùng (người dạy học) sử dụng chúng trong bài viết 1 cách dễ dàng thông qua việc sử dụng cú pháp Markdown mà không cần code.

Ví dụ, người dùng có thể đưa vào bài viết mô phỏng cây nhị phân theo cú pháp sau:
```
\```[tree](itemShape=circle,itemSize=30,height=200)
1:(4)
2:(2)|3:(5)
4:(1)|5:(0)|6:(0)|7:(7)

1:(4)
2:(2)|7:(7)
4:(1)|5:(0)|3:(5)|6:(0)
```

Cho ra kết quả hiển thị 2 trạng thái của cây nhị phân, với animation chuyển trạng thái:

```[tree](itemShape=circle,itemSize=30,height=200)
1:(4)
2:(2)|3:(5)
4:(1)|5:(0)|6:(0)|7:(7)

1:(4)
2:(2)|7:(7)
4:(1)|5:(0)|3:(5)|6:(0)
```

**Người dùng**: Về cơ bản tất cả mọi đối tượng người dùng đều có thể tìm kiếm nội dung học tập mà mình quan tâm cũng như chia sẻ và thương mại hoá kiến thức mà mình có. Cụ thể hơn chúng tôi hướng đến đối tượng người dùng là học sinh, sinh viên, kỹ sư ngành IT những người có mong muốn học tập nâng cao kỹ năng của mình và sẵn sàng trả 1 khoản phí cho những nội dung tốt. Bên cạnh đó những kỹ sư, chuyên gia IT, giảng viên đại học là những người có chuyên môn sâu cũng như khả năng sư phạm là đối tượng người dùng tiềm năng để xây dựng nên kho kiến thức chất lượng cho nền tảng của chúng tôi. Doanh thu sẽ đến từ các nguồn chính:

- Người dùng mua khoá học, khoản phí này được chia sẻ giữa trang web và tác giả (ví dụ 30:70).
- Người viết tạo nội dung sẽ trả phí cho trang web để được sử dụng các thành phần trực quan sinh động đã đc tạo sẵn.
- Trường học trả phí sử dụng dịch vụ để tạo tài liệu học tập, bài test online cho học sinh.

**Cạnh tranh**: Trên thị trường có các dòng sản phẩm chính là đối thủ cạnh tranh:

- Các nền tảng bán khóa học trực tuyến như: *Udemy, Coursera, Brilliant.org...*
- Học và thực hành lập trình với blockly: *code.org*
- Các nền tảng blog cho phép người dùng viết bài chia sẻ kiến thức điển hình là *Medium.com, Ghost.org*.
- Các nền tảng học và luyện code trực tuyến như *leetcode, codelearn.io*.

Về cơ bản chúng tôi giúp người dùng tạo ra nội dung kết hợp được các thành phần cơ bản mà các dịch vụ trên cung cấp cho người dùng của họ chỉ bằng cách viết Markdown. Tất nhiên với các nội dung phức tạp như *Brilliant.org* hay *Code.org* cần xây dựng riêng theo yêu cầu cụ thể chứ chưa thể làm trước 1 cách tổng quát để cho người dùng sẵn sàng sử dụng. Một trong những điểm đặc trưng và là lợi thế cạnh tranh của chúng tôi là tính năng mô phỏng thuật toán trực quan như kể trên được làm sẵn để người dùng dễ dàng sử dụng trong bài viết.

**Chiến lược quảng bá**: Trong quá trình xây dựng sản phẩm chúng tôi tách riêng 1 số module độc lập làm thành những project open source để đóng góp giá trị cho cộng đồng và cũng thông qua đó đưa được sản phẩm đến người dùng tiềm năng 1 cách tốt nhất, bên cạnh những cách tiếp cận thông thường như quảng cáo trên các kênh truyền thông.

## Ý tưởng

- Ý tưởng khởi phát khi tôi đang làm engineer cho 1 công ty và phải giải quyết 1 vấn đề kỹ thuật để làm tăng performance cho thuật toán bằng cách áp dụng cấu trúc dữ liệu dạng cây (btree) để lưu trữ và tìm kiếm dữ liệu. Để hiểu được ý nghĩa cho đến cài đặt và áp dụng thành công thuật toán btree cần rất nhiều thời gian đọc tài liệu cũng như nghiên cứu kỹ tất cả các trường hợp và bản thân đã phải nháp đầy nhiều tờ giấy A4 để cố gắng làm rõ được từng cách chuyển trạng thái. Sau đó khi xem được 1 vài cách biểu diễn thuật toán trực quan trên mạng tôi thấy việc nghiên cứu kỹ các giải thuật phức tạp trở nên hiệu quả hơn nhiều bằng cách này mà không cần nháp bằng tay hay đọc quá nhiều lý thuyết, đồng thời có thể vừa theo sát cách mô phỏng hoạt động vừa code theo nên rất nhanh và chính xác. Tuy nhiên vì chưa hài lòng với các mô phỏng hiện có tôi đã tự làm thử bằng cách sử dụng thư viện D3.js và nhận thấy mình có thể làm đẹp và chi tiết hơn những cái hiện có. Từ đó tôi có động lực tiếp tục nghiên cứu và rủ thêm những người bạn của mình làm mô phỏng thêm nhiều thuật toán khác. Quá trình này giúp chúng tôi ôn lại cũng như hiểu sâu hơn về những cấu trúc dữ liệu và giải thuật mà mình từng học ở đại học nhưng hiệu quả chưa cao.

- Để những tìm hiểu của mình trở nên có ích với mọi người chúng tôi tập hợp các mô phỏng thuật toán này lập thành 1 trang web với ý định biến nó thành 1 cuốn sách ebook về thuật toán với những mô phỏng trực quan sinh động và có thể tương tác được. Sau đó chúng tôi có tham vọng mở rộng nội dung ra các lĩnh vực khác như AI, IOT hay thậm chí là toán học vật lý cũng theo cách diễn giải tương tự...nhưng nhanh chóng nhận ra chúng tôi không có đủ nguồn lực cũng như chuyên môn để có thể làm nhiều và làm tốt được nhiều nội dung như vậy. Ngay cả với lĩnh vực đầu tiên đó là thuật toán chúng tôi cũng chỉ có thể làm tốt phần mô phỏng trực quan trong khi người dùng cần nhiều hơn để có 1 bài học hoàn chỉnh: những diễn giải đi kèm với những minh họa thích hợp cho từng bước chứ không chỉ là mô phỏng cho trạng thái cuối của thuật toán. Để scale được chúng tôi cần tìm cách để người dùng đóng góp nội dung và cũng sẽ đóng vai chủ đạo trong kho nội dung mà chúng tôi xây dựng.

- Bởi vậy chúng tôi hướng đến chuyên môn hóa việc mình làm đó là chỉ tập trung xây dựng các mô phỏng thuật toán và các thành phần UI phức tạp khác, đóng gói chúng và cho phép người dùng sử dụng trong bài viết cùng với các options tùy chỉnh để tạo thành nội dung sinh động độc đáo và hoàn chỉnh của riêng tác giả chỉ bằng cách viết Markdown. Bằng cách này trong tương lai chúng tôi dễ dàng mở rộng đa dạng tập các thành phần UI cung cấp cho người dùng cũng như có thể customize hay cung cấp những thành phần riêng biệt theo yêu cầu cho phù hợp với từng trường hợp cụ thể.

### Motivation

Với xã hội hiện đại ngày càng ứng dụng nhiều công nghệ như hiện nay, việc tạo ra những chương trình hiệu quả trên qui mô lớn sẽ góp phần rất đáng kể vào việc tiết kiệm tài nguyên cũng như giảm thiểu tác động tiêu cực đến môi trường, vì 1 hệ thống hay thuật toán được thiết kế tốt có thể tốt hơn hàng trăm thậm chí hàng nghìn lần. Chúng tôi hy vọng mình có thể đóng góp vào việc bảo vệ môi trường bằng cách giúp nhiều người hơn hiểu về tầm quan trọng của thuật toán cũng như cách áp dụng chúng hiệu quả trong việc xây dựng 1 hệ thống công nghệ thông qua các bài học thú vị và sinh động.

## Products and Services

**Nền tảng blogging thương mại hóa**: Chúng tôi cung cấp nền tảng chia sẻ kiến thức IT cho cộng đồng: là nền tảng trung gian kết nối giữa người muốn chia sẻ kiến thức thông qua hình thức viết và người đọc. Nội dung được chia sẻ dưới hình thức bài viết, bài học hoặc khoá học có thể thương mại hoá nhằm tạo động lực tối đa cho tác giả sáng tạo ra những nội dung chất lượng nhất phục vụ cộng đồng. Trong đó nổi bật là các chức năng:

- Trang web không trực tiếp lưu nội dung của người viết mà cho phép người dùng lưu bài viết của mình trên nền tảng lưu trữ của bên thứ 3 (hiện tại chủ yếu là github, gist và có thể mở rộng ra các nền tảng khác). Do đó người dùng hoàn toàn nắm bản quyền 100% nội dung mình tạo ra và không sợ bị chỉnh sửa hay làm sai lệch nội dung.

- Hỗ trợ hiển thị nội dung người dùng từ nguồn gốc theo cách sinh động:
  - Các thành phần mô phỏng thuật toán trực quan, có thể mở rộng ra toán hình học, vật lý cũng như mô phỏng các lĩnh vực khoa học khác.
  - Các thành phần UI phức tạp như Tabs, Slideshow, Code Editor, Câu hỏi trắc nghiệm,...Về cơ bản có thể nhúng bất kỳ cấu trúc phức tạp nào - The limit is our imagination.
  - Công cụ editor preview theo thời gian thực:
    - Cho phép người dùng soạn thảo trên web đồng bộ với nội dung ở nguồn gốc và ngay lập tức xem phần hiển thị trước ở bên cạnh trình soạn thảo.
    - Xuất bản tài liệu: Bởi vì những nội dung phức tạp chỉ có hiệu lực khi hiển thị trên web, chúng tôi cung cấp tính năng trên editor cho phép người dùng xuất bản bài viết thành tài liệu độc lập dưới dạng app desktop, mobile với đầy đủ chức năng hiển thị để có thể sử dụng offline hay chia sẻ cho người khác.

- Code và debug trực tiếp trên web, trực quan hóa dữ liệu trạng thái thuật toán ngay trong từng bước debug.

```[codeeditor](lang=javascript,height=280px)
// SelectionSort sorts array of items
function selectionSort(a) {
  const n = a.length
  for (let i = 0; i < n-1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[i]) {
        let tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
      }
    }
  }

  return a
}

selectionSort([3,2,1,4,5])
```

- Blockly Programming

Lập trình cho người mới bắt đầu bằng cách sử dụng các khối xếp hình sinh động, sử dụng thư viện [Blockly](https://developers.google.com/blockly) của Google. Hiện chúng tôi đang nghiên cứu cách thức thực thi các dòng lệnh trên robot hoạt động giả lập trên web 1 cách trực quan sinh động.

```[blockly](height=300)
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style={{display: 'none'}}>
  <block type="controls_if"></block>
  <block type="logic_compare"></block>
  <block type="controls_repeat_ext"></block>
  <block type="math_number">
    <field name="NUM">123</field>
  </block>
  <block type="math_arithmetic"></block>
  <block type="text"></block>
  <block type="text_print"></block>
</xml>
```


**Khóa học thuật toán trực quan miễn phí**: Trang web là nền tảng mở cho phép mọi đối tượng người dùng có thể tạo khoá học của riêng mình, trong đó khoá học về cấu trúc dữ liệu và giải thuật trực quan sẽ là khoá học đầu tiên gồm các bài viết miễn phí do chúng tôi cung cấp để giúp người dùng học cũng như là sample giúp hình dung được nội dung có thể tạo ra, tạo tiền đề để thu hút người dùng đăng ký trang. Dưới đây là ví dụ về 1 số thành phần trực quan sẽ được chúng tôi sử dụng trong các bài viết này.

#### Btree

```[tree](itemSize=30,height=200)
1:(3)
2:(1,2)|3:(4,5,6,8)

1:(3)
2:(1,2)|3:(4,5,6,7,8)

1:(3,6)
2:(1,2)|3:(4,5)|4:(7,8)
```

#### Binary Tree

```[tree](itemShape=circle,itemSize=30,height=250)
1:(4)
2:(2)|3:(5)
4:(1)|5:(3)
```

#### RedBlack Tree

```[tree](itemShape=circle,itemSize=30,height=250)
1:(4):black
2:(2):black|3:(5):green
4:(1):black|5:(3):red

1:(4):black
2:(2):black|3:(5):red
4:(1):black|5:(3):red|6:(10):black|7:(15):black
```

**Open source**: Quá trình làm sản phẩm bao gồm nhiều module được tách ra thành những project độc lập và có thể open source để đóng góp cho cộng đồng:
- Cấu trúc dữ liệu và giải thuật được cài đặt bằng 1 số ngôn ngữ lập trình chính yếu hiện nay: Go, Typescript, Python, Java.
- Cấu trúc dữ liệu và giải thuật biểu diễn trực quan dùng thư viện D3.js ( Typescript ).
- Trình biên dịch Markdown viết hoàn toàn bằng Typescript và có khả năng mở rộng cú pháp linh hoạt, đồng thời hỗ trợ render React Component.

### Các Usecase, Đặc trưng nổi bật

```[slideshow](height=300)
<!-- Slide content -->
```

[Slideshow: high tech => simple to use (just write) => serve multiple purposes]

Prerender giúp trang chủ load nhanh

- Người dùng muốn tìm và học kiến thức IT 1 cách trực quan sinh động.
- Người dùng muốn share kiến thức chuyên môn và kiếm tiền từ nó.
- Người dùng muốn note lại tài liệu, kiến thức cho riêng mình offline và có thể share nó với người khác (tính năng export offline).
- Người dùng muốn viết, xuất bản bài báo khoa học với các thành phần trực quan đặc biệt được xây dựng theo yêu cầu.
- Giáo viên tạo bài giảng bài test với câu hỏi trắc nghiệm, code editor trong bài.
- Học sinh học, làm bài test trả lời câu hỏi, coding test và submit kết quả online.
- Người dùng muốn viết code với tính năng debug trực quan dữ liệu theo từng bước.
- Công ty muốn làm tài liệu training cho nhân viên, hay training khách hàng về sản phẩm.

## Thị trường

```[bars](height=200)
1,7,3,6,4,2,5
```

Thị trường giáo dục vốn rộng lớn và được dẫn dắt bởi các công ty hàng đầu

- Khóa học trực tuyến: Udemy, Coursera, Brilliant.com
- Học và thực hành lập trình với blockly: code.org
- Luyện thuật toán trực tuyến: hackerrank, leetcode
- Blogging platform: medium.com, ghost.org

Sản phẩm của chúng tôi có khả năng mở rộng linh hoạt có thể kết hợp chức năng cơ bản của các dịch vụ kể trên vào trong phạm vi 1 bài viết, sự tinh giản trong cách dùng (chỉ bằng cách viết) và những tính năng sáng tạo (Visual thuật toán, Slideshow với code animation,...) về lâu dài chúng tôi hướng đến thị trường giáo dục rộng lớn bao gồm các cá nhân và tổ chức giúp cho mọi người học tập theo nhiều cách khác nhau. Tuy nhiên để khởi đầu chúng tôi tập trung vào 1 phân khúc cụ thể với qui mô nhỏ để hiểu hơn về thị trường cũng như định hướng rõ ràng cho sản phẩm của mình trước khi mở rộng.

Chúng tôi hợp tác với 1 số trường đại học giúp cho giảng viên tạo được tài liệu học sinh động tập trung vào lĩnh vực IT và lập trình cho sinh viên với các tính năng:

- Mô phỏng trực quan hoạt động của cấu trúc dữ liệu và giải thuật.
- Làm coding test trên web.
- Lập trình robot với blockly, giả lập mô phỏng kết quả thực thi robot.

## Roadmap

## Team và văn hóa
  
Sử dụng tài nguyên chặt chẽ hiệu quả tránh lãng phí

Sản phẩm demo chỉ gói gọn trong 1 web page đủ để cho người dùng hình dung ra giá trị mang lại.

## Marketing Plan