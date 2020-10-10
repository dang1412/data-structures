# Codetube.vn Business Plan

## Tổng quan về sản phẩm

### **Nền tảng chia sẻ kiến thức thương mại hóa**

Chúng tôi cung cấp nền tảng chia sẻ kiến thức IT cho cộng đồng, trong đó nổi bật là tính năng hỗ trợ người dùng tạo nội dung với các thành phần tương tác trực quan sinh động có sẵn. Với khả năng mở rộng linh hoạt ngoài thành phần chủ đạo ban đầu là mô phỏng thuật toán, người dùng còn được hỗ trợ để có thể tạo ra tài liệu đa dạng và sinh động bao gồm các thành phần UI phức tạp như vẽ đồ thị, tabs, slideshow, code editor... trong bài chỉ bằng cách viết Markdown. Nội dung được chia sẻ dưới hình thức bài viết, bài học hoặc khoá học có thể thương mại hoá nhằm tạo động lực tối đa cho tác giả sáng tạo ra những nội dung chất lượng phục vụ cộng đồng. Giáo viên có thể tạo bài giảng, bài test câu hỏi trắc nghiệm, coding test. Học sinh trả lời, code, debug và nộp bài...tất cả ngay trong phạm vi 1 bài viết rất nhanh chóng và thuận tiện.

Đây là ví dụ về trình soạn thảo markdown của chúng tôi, các bạn truy cập trang web [Codetube.vn - Business Plan](https://codetube.vn/business) để thấy tài liệu này được hiển thị trên web với các thành phần UI đặc biệt.

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

### **Vấn đề**

Ngành công nghệ thông tin đã đang và sẽ tiếp tục phát triển trong nhiều thập kỷ tới và đóng vai trò quan trọng trong cuộc sống hàng ngày của con người. Bởi vậy việc học lập trình cũng như thuật toán đang dần phổ cập cho tất cả mọi đối tượng ngay từ bậc học sinh cấp tiểu học.

Tuy nhiên việc học thuật toán theo cách truyển thống với cách diễn giải chủ yếu bằng chữ và 1 vài hình ảnh tĩnh là khá thách thức đối với người học và gây nhàm chán đặc biệt đối với những thuật toán khó bao gồm nhiều bước chuyển đổi trạng thái phức tạp. Từ đó dẫn đến việc người học mất hứng thú dễ dàng bỏ cuộc hoặc phải bỏ ra rất nhiều công sức và thời gian để học, nắm bắt cho đến vận dụng mà hiệu quả lại chưa cao, kể cả đối với học sinh hay các kỹ sư đã đi làm.

Cùng với đó là khó khăn cho người giáo viên để có thể làm ra tài liệu giải thích vừa ngắn gọn, dễ hiểu cho những vấn đề phức tạp và gây được hứng thú đối với học viên, đặc biệt trong bối cảnh học tập từ xa đang trở thành xu hướng như hiện nay.

### **Giải pháp**

Chúng tôi xuất thân là sinh viên IT và sau này trở thành lập trình viên, hiểu rất rõ vấn đề này và dựa trên nhiều năm kinh nghiệm của mình đã nghĩ ra giải pháp hiệu quả hơn để học thuật toán đó là lập trình mô phỏng hoạt động của thuật toán bao gồm từng trạng thái và cách chuyển trạng thái thuật toán 1 cách trực quan và tổng quát cho tất cả các trường hợp dựa trên input của người dùng. Người dùng tương tác để chuyển đến bất kỳ trạng thái nào mong muốn với hiệu ứng chuyển sinh động, từ đó gây hứng thú cũng như dễ dàng nắm bắt, kiểm chứng và hiểu rõ hơn từng khía cạnh của thuật toán, các case thông thường, case đặc biệt...thay vì phải đọc các lý giải bằng chữ rất dài và khó hình dung.

Ngoài ra để tăng khả năng **mở rộng và chuyên biệt hoá** từng công đoạn chúng tôi lập trình, đóng gói các mô phỏng trực quan này và cho phép người dùng (người dạy học) sử dụng chúng trong bài viết 1 cách dễ dàng thông qua việc sử dụng cú pháp Markdown mà không cần code.

Ví dụ, người dùng có thể đưa vào bài viết mô phỏng cây nhị phân theo cú pháp sau (không có `\`):

```tree
\```[tree](itemShape=circle,itemSize=30,height=200)
1:(4)
2:(2)|3:(5)
4:(1)|5:(0)|6:(0)|7:(7)

1:(4)
2:(2)|7:(7)
4:(1)|5:(0)|3:(5)|6:(0)
\```
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

### **Đối tượng người dùng**

Về cơ bản tất cả mọi người đều có thể tìm kiếm nội dung học tập mà mình quan tâm cũng như chia sẻ và thương mại hoá kiến thức mà mình có về bất kỳ lĩnh vực nào. Tuy nhiên chúng tôi tập trung hơn vào ngành IT với các thành phần hỗ trợ chủ yếu trong lĩnh vực này (thuật toán, code), hướng đến đối tượng người dùng là học sinh, sinh viên, kỹ sư ngành IT những người có mong muốn học tập nâng cao kỹ năng của mình và sẵn sàng trả 1 khoản phí cho những nội dung tốt. Bên cạnh đó những kỹ sư, chuyên gia IT, giảng viên đại học là những người có chuyên môn sâu cũng như khả năng sư phạm là đối tượng người dùng tiềm năng để xây dựng nên kho kiến thức chất lượng cho nền tảng của chúng tôi.

Hướng đi ban đầu chúng tôi tìm kiếm các trường học, tổ chức có nhu cầu dạy về lập trình, hợp tác chặt chẽ để tạo ra các thành phần trực quan phù hợp nhất đồng thời đáp ứng nhu cầu về tính độc đáo cá nhân hóa (peronalized) cho từng đơn vị cụ thể. Ngoài ra có thể giúp mở rộng thương mại hóa khóa học online trên phạm vi rộng nếu muốn.

Doanh thu sẽ đến từ các nguồn chính:

- Trường học trả phí sử dụng dịch vụ để tạo tài liệu học tập, bài test online cho học sinh.
- Người dùng mua khoá học, khoản phí này được chia sẻ giữa trang web và tác giả (ví dụ 30:70).
- Người dùng tạo nội dung sẽ trả phí cho trang web để được sử dụng các thành phần trực quan sinh động đã đc tạo sẵn.

### **Cạnh tranh**

Trên thị trường có các dòng sản phẩm chính là đối thủ cạnh tranh:

- Các nền tảng bán khóa học trực tuyến như: *Udemy, Coursera, Brilliant.org...*
- Học và thực hành lập trình với blockly: *code.org*
- Các nền tảng blog cho phép người dùng viết bài chia sẻ kiến thức điển hình là *Medium.com, Ghost.org*.
- Các nền tảng học và luyện code trực tuyến như *leetcode, codelearn.io*.

Về cơ bản chúng tôi giúp người dùng tạo ra nội dung kết hợp được các thành phần cơ bản mà các dịch vụ trên cung cấp cho người dùng của họ chỉ bằng cách viết Markdown. Tất nhiên với các nội dung phức tạp như *Brilliant.org* hay *Code.org* cần xây dựng riêng theo yêu cầu cụ thể chứ chưa thể làm trước 1 cách tổng quát để cho người dùng sẵn sàng sử dụng. Điểm đặc trưng và là lợi thế cạnh tranh của chúng tôi là tính năng mô phỏng thuật toán trực quan cũng như khả năng mở rộng ra các thành phần UI phức tạp khác, được tạo sẵn để người dùng dễ dàng sử dụng trong bài viết mà không cần code.

### **Chiến lược marketing**

Quá trình xây dựng sản phẩm bao gồm nhiều module riêng rẽ được thiết kế dưới dạng các thư viện lập trình độc lập được sử dụng kết hợp với nhau trong dự án chính. Trong đó chúng tôi chọn lọc 1 số module làm thành những project open source để đóng góp giá trị cho cộng đồng và cũng thông qua đó đưa được sản phẩm đến người dùng tiềm năng 1 cách tốt nhất, bên cạnh những cách tiếp cận thông thường như quảng cáo trên các kênh truyền thông.

---

## Ý tưởng

- Ý tưởng khởi phát khi tôi đang làm engineer cho 1 công ty và phải giải quyết 1 vấn đề kỹ thuật để làm tăng performance cho thuật toán bằng cách áp dụng cấu trúc dữ liệu dạng cây (btree) để lưu trữ và tìm kiếm dữ liệu. Để hiểu được ý nghĩa cho đến cài đặt và áp dụng thành công thuật toán btree cần rất nhiều thời gian đọc tài liệu cũng như nghiên cứu kỹ tất cả các trường hợp và bản thân đã phải nháp đầy nhiều tờ giấy A4 để cố gắng làm rõ được từng cách chuyển trạng thái. Sau đó khi xem được 1 vài cách biểu diễn thuật toán trực quan trên mạng tôi thấy việc nghiên cứu kỹ các giải thuật phức tạp trở nên hiệu quả hơn nhiều bằng cách này mà không cần nháp bằng tay hay đọc quá nhiều lý thuyết, đồng thời có thể vừa theo sát cách mô phỏng hoạt động vừa code theo nên rất nhanh và chính xác. Tuy nhiên vì chưa hài lòng với các mô phỏng hiện có tôi đã tự làm thử bằng cách sử dụng thư viện D3.js và nhận thấy mình có thể làm đẹp và chi tiết hơn những cái hiện có. Từ đó tôi có động lực tiếp tục nghiên cứu và rủ thêm những người bạn của mình làm mô phỏng thêm nhiều thuật toán khác. Quá trình này giúp chúng tôi ôn lại cũng như hiểu sâu hơn về những cấu trúc dữ liệu và giải thuật mà mình từng học ở đại học nhưng hiệu quả chưa cao.

- Để những tìm hiểu của mình trở nên có ích với mọi người chúng tôi tập hợp các mô phỏng thuật toán này lập thành 1 trang web với ý định biến nó thành 1 cuốn sách ebook về thuật toán với những mô phỏng trực quan sinh động và có thể tương tác được. Sau đó chúng tôi có tham vọng mở rộng nội dung ra các lĩnh vực khác như AI, IOT hay thậm chí là toán học vật lý cũng theo cách diễn giải tương tự...nhưng nhanh chóng nhận ra chúng tôi không có đủ nguồn lực cũng như chuyên môn để có thể làm nhiều và làm tốt được nhiều nội dung như vậy. Ngay cả với lĩnh vực đầu tiên đó là thuật toán chúng tôi cũng chỉ có thể làm tốt phần mô phỏng trực quan trong khi người dùng cần nhiều hơn để có 1 bài học hoàn chỉnh: những diễn giải đi kèm với những minh họa thích hợp cho từng bước chứ không chỉ là mô phỏng cho trạng thái cuối của thuật toán. Để scale được chúng tôi cần tìm cách để người dùng đóng góp nội dung và những nội dung đó cũng sẽ đóng vai chủ đạo trong kho nội dung mà chúng tôi xây dựng.

- Bởi vậy chúng tôi hướng đến chuyên môn hóa việc mình làm đó là chỉ tập trung xây dựng các mô phỏng thuật toán và các thành phần UI đặc biệt khác, đóng gói chúng và cho phép người dùng sử dụng trong bài viết cùng với các options tùy chỉnh để tạo thành nội dung sinh động độc đáo và hoàn chỉnh của riêng mình chỉ bằng cách viết Markdown. Bằng cách này trong tương lai chúng tôi dễ dàng mở rộng đa dạng tập các thành phần UI cung cấp cho người dùng cũng như có thể customize hay cung cấp những thành phần riêng biệt theo yêu cầu cho phù hợp với từng trường hợp cụ thể.

### **Động lực, tác động xã hội**

Về cơ bản chúng tôi hỗ trợ việc học IT trở nên hiệu quả và thú vị hơn cho cả người dạy và người học. Với hướng phát triển dạy lập trình bằng những hình khối kéo thả blockly và giả lập thực thi, chúng tôi góp phần thúc đẩy sự phát triển của Robotic và IOT trong tương lai. Khi ấy người dùng không chuyên có thể tuỳ chỉnh (lập trình) cho Robot hay các thiết bị IOT của mình dễ dàng hơn bằng cách kéo thả sắp xếp các khối vừa thú vị nhanh chóng mà không cần kiến thức chuyên sâu về lập trình.

Với xã hội hiện đại ngày càng ứng dụng nhiều công nghệ như hiện nay, việc tạo ra những chương trình hiệu quả trên qui mô lớn sẽ góp phần rất đáng kể vào việc tiết kiệm tài nguyên cũng như giảm thiểu tác động tiêu cực đến môi trường, vì 1 hệ thống hay thuật toán được thiết kế tốt có thể tốt hơn hàng trăm thậm chí hàng nghìn lần so với cách làm đơn thuần. Chúng tôi hy vọng mình có thể đóng góp vào việc bảo vệ môi trường bằng cách giúp nhiều người hơn hiểu về tầm quan trọng của thuật toán cũng như cách áp dụng chúng hiệu quả trong việc xây dựng 1 hệ thống công nghệ thông tin qua các bài học thú vị và sinh động.

---

## Sản phẩm và dịch vụ

### **Nền tảng blogging thương mại hóa**

Chúng tôi cung cấp nền tảng chia sẻ kiến thức IT cho cộng đồng: là nền tảng trung gian kết nối giữa người muốn chia sẻ kiến thức thông qua hình thức viết và người đọc. Nội dung được chia sẻ dưới hình thức bài viết, bài học hoặc khoá học có thể thương mại hoá nhằm tạo động lực tối đa cho tác giả sáng tạo ra những nội dung chất lượng phục vụ cộng đồng. Trong đó nổi bật là các tính năng:

- Trang web không trực tiếp lưu nội dung của người viết mà cho phép người dùng lưu bài viết của mình trên nền tảng lưu trữ của bên thứ 3 (github, gist và có thể mở rộng ra các nền tảng khác). Do đó **người dùng hoàn toàn nắm bản quyền 100%** nội dung mình tạo ra và không sợ bị chỉnh sửa hay làm sai lệch nội dung.

- Hỗ trợ hiển thị nội dung người dùng với các thành phần UI trực quan sinh động bằng cách sử dụng cú pháp markdown mở rộng:
  - Mô phỏng thuật toán trực quan, ví dụ 3 trạng thái của tree được phân tách bởi 1 dòng trống theo cú pháp sau.

  ```visual
  \```[tree](itemSize=30,height=200)
  1:(3)
  2:(1,2)|3:(4,5,6,8)

  1:(3)
  2:(1,2)|3:(4,5,6,7,8)

  1:(3,6)
  2:(1,2)|3:(4,5)|4:(7,8)
  \```
  ```

  - Tabs
  
  ```visual
  ## {.tabset}

  ## Tab1

  Tab1 `content`

  ## Tab2

  **Tab2** content

  ## {-}
  ```

  - Slideshow

  ```visual
  ## {Slideshow}

  ## {section}

  Slide1 `content`

  ## {section}

  **Slide2** content

  ## {-}
  ```

  - Code Editor (IDE)

  ```visual
  \```[codeeditor](lang=javascript,height=200px)
  const a = 1;
  let b = a + 1;
  \```
  ```

  - Ngoài ra có thể mở rộng ra các thành phần khác. Ở đây chúng tôi cần nghiên cứu thị trường kỹ lưỡng để đưa ra những thành phần có nhiều nhu cầu cũng như khả năng tuỳ chỉnh linh hoạt mà vẫn đơn giản để sử dụng nhất có thể.

- Công cụ editor preview theo thời gian thực:
  - Cho phép người dùng **soạn thảo trên web** đồng bộ với nội dung ở nguồn gốc và ngay lập tức xem phần hiển thị trước ở bên cạnh trình soạn thảo.
  - Thanh công cụ hỗ trợ cho phép người dùng không cần nhớ nhiều cú pháp mà chỉ cần bấm nút để nội dung sample tương ứng được thêm vào vị trí hiện tại, người dùng chỉnh sửa các tham số theo ý muốn của mình và kiểm tra kết quả hiển thị.
  - Bởi vì những nội dung đặc biệt chỉ có hiệu lực khi hiển thị trên web, chúng tôi cung cấp tính năng cho phép người dùng **xuất bản bài viết thành tài liệu độc lập dưới dạng app** desktop, mobile với đầy đủ chức năng hiển thị để có thể sử dụng offline hay chia sẻ cho người khác.

- **Code và debug trực tiếp trên web**, trực quan hóa dữ liệu trạng thái thuật toán ngay trong từng bước debug.
  - Giáo viên có thể soạn bài coding test bằng cách viết diễn giải vấn đề và nhúng code IDE với mặc định là function với các tham số và nội dung trống (để cho học sinh cài đặt) vào bài viết ở vị trí mong muốn.
  - Giáo viên tạo các bộ test input, định nghĩa format input bằng cách viết hàm parse input từ raw string ra các tham số cần thiết.
  - Giáo viên truy cập trang quản lý tương ứng cho bài test tạo các bộ test để chấm bài và kết quả đúng tương ứng. Hệ thống sẽ dùng thông tin này để thực hiện chạy và chấm bài tự động.

  ```js
  // input
  [1,3,5,2]
  [1,4,3,6,2]

  // expected output
  [1,2,3,5]
  [1,2,3,4,6]
  ```

  - Học sinh truy cập bài viết đọc diễn giải, thực hiện code và chạy thử các bộ test do giáo viên cung cấp hoặc tự mình nhập vào và kiểm tra kết quả. Sau khi hài lòng học sinh bấm nút để nộp bài, có thể thêm chức năng tính thời gian làm bài.
  - Giáo viên truy cập trang quản lý, xem được list các bài nộp của học sinh, xem kết quả chấm bài tự động cũng như nội dung chi tiết của từng bài.

```[codeeditor](lang=javascript,height=280px)
// SelectionSort sorts array of items
function selectionSort(a) {
  const n = a.length
  for (let i = 0; i < n-1; i++) {
    for (let j = i + 1; j < n; j++) {
      // ...code here
    }
  }

  return a
}

selectionSort([3,2,1,4,5])
```

Lời giải

```javascript
if (a[j] < a[i]) {
  let tmp = a[i]
  a[i] = a[j]
  a[j] = tmp
}
```

- **Blockly Programming**: Lập trình cho người mới bắt đầu bằng cách sử dụng các khối xếp hình kéo thả sinh động sử dụng thư viện [Blockly](https://developers.google.com/blockly). Kết hợp với 1 game nhỏ được thiết kế đơn giản để giả lập thực thi chương trình:
  - Khi thực thi Block sẽ gọi đến api trong game để kiểm tra điều kiện hay ra lệnh cho nhân vật, ví dụ: ![cat](https://raw.githubusercontent.com/kittykatattack/learningPixi/master/examples/images/screenshots/03.png "Cat game")

  ```js
  cat.isHitWall()  // điều kiện
  cat.moveForwad() // hành động
  cat.turnLeft()   // hành động
  cat.turnRight()  // hành động
  ```

  - Xa hơn chúng ta có thể thiết kế những robot (hay thiết bị IOT) được trang bị cảm biến, camera kết hợp với các thuật toán *trí tuệ nhân tạo* để tạo ra những API bậc cao như trên. Người dùng không chuyên hoàn toàn có thể lập trình cho những con robot hay thiết bị này hoạt động theo ý muốn sử dụng phương pháp kéo thả khối trên app 1 cách thuận tiện mà không cần kiến thức chuyên môn. Giúp người dùng (khách hàng) thiết kế ra các bài học hướng dẫn tạo ra các sản phẩm như vậy có thể là hướng đi chủ đạo tiếp theo của chúng tôi trong thời gian tới.

```[blockly](height=300)
<!-- This will show blockly drag drop editor on web -->
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

- Slideshow với code animation

```[slideshow](height=300)
<!-- This will show slides with code animation on web -->
```

### **Khóa học thuật toán trực quan miễn phí**

Trang web là nền tảng mở cho phép mọi đối tượng người dùng có thể tạo khoá học của riêng mình bằng cách viết, trong đó khoá học về cấu trúc dữ liệu và giải thuật trực quan sẽ là khoá học đầu tiên gồm các bài viết miễn phí do chúng tôi cung cấp để giúp người dùng học cũng như là sample giúp hình dung được nội dung có thể tạo ra, tạo tiền đề để thu hút người dùng đăng ký trang. Dưới đây là ví dụ về 1 số thành phần trực quan sẽ được chúng tôi sử dụng trong các bài viết này (xem trên web để hiển thị các mô phỏng thuật toán trực quan).

#### Btree

```[tree](itemSize=30,height=200)
1:(3)
2:(1,2)|3:(4,5,6,8)

1:(3)
2:(1,2)|3:(4,5,6,7,8)

1:(3,6)
2:(1,2)|3:(4,5)|4:(7,8)

1:(3,6)
2:(1,2)|3:(4,5)|4:(7,8,10)
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

### **Open source**

Quá trình làm sản phẩm bao gồm nhiều module được tách ra thành những project độc lập và có thể open source để đóng góp cho cộng đồng:

- Cấu trúc dữ liệu và giải thuật cài đặt bằng 1 số ngôn ngữ lập trình phổ biến hiện nay: Go, Typescript, Python, Java.
- Cấu trúc dữ liệu và giải thuật mô phỏng trực quan dùng thư viện D3.js ( Typescript ).
  - Gắn logo và link đến trang chủ của sản phẩm trên các mô phỏng trực quan.
- Trình biên dịch Markdown viết hoàn toàn bằng Typescript và có khả năng mở rộng cú pháp linh hoạt, đồng thời hỗ trợ render React Component.

---

## Thị trường

Thị trường giáo dục vốn rộng lớn và được dẫn dắt bởi các công ty hàng đầu

- Khóa học trực tuyến: *Udemy, Coursera, Brilliant.com*.
- Học và thực hành lập trình với blockly: *code.org*.
- Luyện code trực tuyến: *hackerrank, leetcode*.
- Blogging platform: *medium.com, ghost.org*.

Sản phẩm của chúng tôi có khả năng mở rộng linh hoạt có thể giúp người dùng kết hợp nội dung cơ bản của các dịch vụ kể trên vào trong phạm vi 1 bài viết. Với sự đơn giản trong cách dùng và những tính năng sáng tạo (Visual thuật toán, Slideshow với code animation,...) về lâu dài chúng tôi hướng đến thị trường giáo dục rộng lớn bao gồm các cá nhân và tổ chức giúp cho mọi người học tập theo nhiều cách khác nhau.

### **Đặc trưng nổi bật**

Những đặc điểm làm nên đăc trưng khó để bắt chước cũng như lợi thế cạnh tranh của sản phẩm

- Tính kỹ thuật
  - Tính năng Prerender giúp trang chủ load nhanh ngay cả trong môi trường internet tốc độ thấp (view hiển thị trước khi các script nặng được load).
  - Tính năng Lazy load: các thành phần UI đặc biệt có thể nặng đến rất nặng về dung lượng nhưng chỉ được load khi người dùng sử dụng. Do vậy chúng tôi có thể thêm vào tập các thành phần cung cấp mà không sợ ảnh hưởng trải nghiêm của người dùng nếu không dùng đến.
  - Các thành phần đặc biệt sử dụng trong bài viết bằng cú pháp markdown mở rộng, được thiết kế với khả năng tuỳ chỉnh cao phát huy khả năng sáng tạo của người dùng.
  - Biểu diễn thuật toán trực quan sử dụng [D3.js](https://d3js.org/)
  - Slideshow với [Reveal.js](https://revealjs.com/)
  - Lập trình [Blockly](https://developers.google.com/blockly) mô phỏng kết quả thực thi bằng cách kết hợp gọi API game viết bằng [Pixi.js](https://www.pixijs.com/)
  - Code Editor sử dụng [CodeMirror](https://codemirror.net/) nhúng trong bài với tính năng thực thi và debug trực quan với nhiều ngôn ngữ lập trình khác nhau.
- Tính đơn giản, linh hoạt trong cách dùng
  - Chúng tôi giải quyết các vấn đề khó bằng lập trình, người dùng sử dụng chỉ bằng cách viết theo cú pháp
  - Người dùng viết nội dung theo ý mình, đồng thời sử dụng kết hợp các thành phần đặc biệt được tạo sẵn (hoặc tạo theo yêu cầu) theo cách sáng tạo bất kỳ.
- Hữu dụng cho nhiều mục đích
  - Người dùng muốn tìm và học kiến thức theo cách trực quan sinh động.
  - Người dùng muốn share kiến thức chuyên môn và kiếm tiền từ nó.
  - Người dùng muốn note lại tài liệu, kiến thức cho riêng mình offline và có thể share nó với người khác (tính năng export offline).
  - Người dùng muốn viết, xuất bản bài báo khoa học với các thành phần trực quan đặc biệt được xây dựng theo yêu cầu.
  - Người dùng muốn làm slideshow để thuyết trình hay làm bài giảng.
  - Giáo viên tạo bài giảng bài test với câu hỏi trắc nghiệm, code editor trong bài.
  - Học sinh học, làm bài test trả lời câu hỏi, coding test và submit kết quả online.
  - Người dùng muốn code và debug trực quan dữ liệu theo từng bước (tính năng debug trực quan).
  - Công ty muốn làm tài liệu training cho nhân viên, hay training khách hàng về sản phẩm.

Tuy nhiên để khởi đầu chúng tôi chỉ tập trung vào 1 phân khúc cụ thể với qui mô nhỏ để hiểu hơn về thị trường cũng như định hướng rõ ràng cho sản phẩm của mình trước khi mở rộng.

### **Hạn chế**

Các thành phần mô phỏng thuật toán, UI trực quan mà chúng tôi xây dựng khá riêng rẽ và hạn chế về số lượng nên khó đáp ứng những nhu cầu sáng tạo cao hơn của người dùng. Chúng tôi cần nghiên cứu giải pháp tổng quát hơn như cho phép tạo hình, kéo thả và thiết lập các animation chuyển động để người dùng tự do sáng tạo các thành phần đặc biệt của riêng mình. Tuy nhiên giải pháp này không đơn giản, đòi hỏi kỹ thuật cao và nhiều thời gian công sức nghiên cứu, phát triển.

Chúng tôi còn thiếu về mảng điều tra thị trường nên nếu không tìm hiểu kỹ càng để lựa chọn hướng đi thích hợp có thể rơi vào tình cảnh phổ biến của nhiều startup đó là giải quyết các vấn đề phức tạp thú vị mà mình thích nhưng không có nhu cầu thị trường hoặc nhu cầu rất thấp.

---

## **Trạng thái hiện tại và kế hoạch**

Sản phẩm của chúng tôi mới chỉ ở dạng prototype [demo](https://codetube.vn/editor) các thành phần mà người dùng có thể đưa vào bài viết, và đa phần các ý tưởng được nêu ở trên chưa được thực thi và chưa có dữ liệu khách hàng. Hướng đi của chúng tôi là tìm kiếm các tổ chức giáo dục nhỏ, bắt đầu bằng việc điều tra thấu hiểu nhu cầu giảng dạy từ đó thiết kế trang demo bằng sản phẩm hiện có sao cho phù hợp nhất với nhu cầu khách hàng và đề xuất những hướng đi giúp họ cải thiện hiệu suất, qui trình dạy và học.

Hiện tại chúng tôi đang làm việc với 1 nhà đầu tư bên Úc nghiên cứu về việc sử dụng lập trình khối kéo thả Blockly để đưa vào giảng dạy lập trình robot cho trẻ em. Kế hoạch của chúng tôi trong tháng 10 và 11 này là tập trung thiết kế các thành phần lập trình khối Blockly và tạo trang demo cho khách hàng chuyên về Blockly.

- Thiết kế toolbox với các khối lập trình block có thể custom được.
- Block kết hợp với gọi API để thực thi điều khiển nhân vật trong game.
- Tạo ra 1 vài game bằng [pixi.js](https://www.pixijs.com/), cho phép người dùng lựa chọn để kết hợp với block.
- Block kết hợp với gọi API để thực thi robot thực tế [Dash & Dot](https://www.makewonder.com/robots/dash/)

Ngoài ra chúng tôi có thể nghiên cứu theo hướng giúp trường học quản lý việc dạy và học lập trình với bài giảng, coding test online do giáo viên tự soạn, tuỳ vào việc tìm hiểu nhu cầu thị trường sẽ có hướng phát triển cụ thể. Cùng với đó tiếp tục phát triển những nội dung đầu tiên cho trang web (không ưu tiên bằng task cho khách hàng):

- Viết bài hướng dẫn sử dụng các thành phần UI đặc biệt.
- Viết bài giảng về thuật toán có mô phỏng trực quan.
- Phát triển mô phỏng các thuật toán mới.

---

## **Team và văn hóa**

- Đặng Thanh Tùng
  - Kỹ sư frontend.
  - Đưa ra ý tưởng và code chính prototype dự án cho đến thời điểm hiện tại.

- Lê Văn Nghĩa
  - Nhà phát triển phần mềm mã nguồn mở, là tác giả chính của nhiều dự án mã nguồn mở được nhiều người biết tới.
  - Phụ trách thiết kế các service backend có thể chịu tải người dùng qui mô lớn ở các giai đoạn sau của dự án.

- David Nguyễn
  - Chuyên gia nghiên cứu về giáo dục AI và Robotic tại Úc.
  - Phụ trách nghiên cứu thị trường và sale, hiện anh đang làm việc trực tiếp với 1 số đơn vị tại Úc để triển khai dự án dạy lập trình robot cho trẻ em.

Ngoài ra chúng tôi cũng đang liên hệ để hợp tác cùng 1 số kỹ sư phần mềm giỏi và có hiểu biết sâu, đam mê trong các lĩnh vực AI, Robotic, IOT. Chúng tôi vốn xuất thân là những lập trình viên dày dạn kinh nghiệm và có năng lực nên phong cách làm việc đã được định hình khá rõ ngay từ ban đầu:

- Phần mềm được thiết kế chặt chẽ có cấu trúc rõ ràng, chia thành các module nhỏ rõ ràng về ý nghĩa, tính sử dụng lại, dễ test, maintain và khả năng mở rộng cao. Cùng với đó là mindset luôn muốn cải thiện hiệu năng, sử dụng tài nguyên tính toán tối ưu nhất có thể.
- Chúng tôi mong muốn mình tiếp tục phát huy phong cách này khi thực hiện dự án: tổ chức chặt chẽ, tính toán kỹ càng trước khi hành động, hướng phát triển tập trung đạt hiệu quả cao chứ không lan man, hời hợt và màu mè gây thất thoát lãng phí.

Chúng tôi hy vọng có cơ hội được đồng hành với các nhà đầu tư, các mentor nhiều năm kinh nghiệm sau chương trình để dự án có thể phát huy tối đa tiềm năng và sớm đưa được sản phẩm trí tuệ Việt Nam ra thị trường quốc tế.
