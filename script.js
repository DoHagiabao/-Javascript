```javascript
// Hàm tính điểm trung bình
function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}


// Hàm xếp loại học tập
function classify(avg) {
    if (avg >= 8.0) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}


// Xử lý khi bấm nút "Tính kết quả"
document.getElementById("studentForm").addEventListener("submit", function(event) {

    // Không reload trang
    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();

    let scores = [
        Number(document.getElementById("score1").value),
        Number(document.getElementById("score2").value),
        Number(document.getElementById("score3").value),
        Number(document.getElementById("score4").value),
        Number(document.getElementById("score5").value)
    ];

    let error = document.getElementById("error");
    let result = document.getElementById("result");

    // Kiểm tra tên
    if (name === "") {
        error.textContent = "Vui lòng nhập tên sinh viên!";
        result.innerHTML = "";
        return;
    }

    // Kiểm tra điểm
    for (let i = 0; i < scores.length; i++) {
        if (
            document.getElementById("score" + (i + 1)).value === "" ||
            scores[i] < 0 ||
            scores[i] > 10
        ) {
            error.textContent = "Điểm phải được nhập đầy đủ và nằm trong khoảng từ 0 đến 10!";
            result.innerHTML = "";
            return;
        }
    }

    // Xóa thông báo lỗi
    error.textContent = "";

    // Tính điểm trung bình
    let avg = calculateAverage(scores);

    // Xếp loại
    let rank = classify(avg);

    // Hiển thị kết quả
    result.innerHTML = `
        <h2>KẾT QUẢ</h2>

        <p><strong>Tên sinh viên:</strong> ${name}</p>

        <table>
            <tr>
                <th>Môn học</th>
                <th>Điểm</th>
            </tr>

            <tr>
                <td>Giải tích 1</td>
                <td>${scores[0]}</td>
            </tr>

            <tr>
                <td>Đại số tuyến tính</td>
                <td>${scores[1]}</td>
            </tr>

            <tr>
                <td>Xác suất thống kê</td>
                <td>${scores[2]}</td>
            </tr>

            <tr>
                <td>Tin học đại cương</td>
                <td>${scores[3]}</td>
            </tr>

            <tr>
                <td>Xây dựng ứng dụng Web</td>
                <td>${scores[4]}</td>
            </tr>
        </table>

        <p class="average">
            <strong>Điểm trung bình:</strong> ${avg.toFixed(2)}
        </p>

        <p class="classification">
            <strong>Xếp loại:</strong> ${rank}
        </p>
    `;
});
```
