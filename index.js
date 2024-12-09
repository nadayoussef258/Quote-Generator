function fetchData() {
    var option = document.getElementById('option').value; // الحصول على القيمة المختارة
    var quote = document.getElementById('quote');
    var author = document.getElementById('author');
    const apiKey = "pl68vUFpc5ZIc5QO7iOXbw==uJwNJyG82SGiO37y";

    // إنشاء كائن XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // إعداد الطلب
    xhr.open('GET', 'https://api.api-ninjas.com/v1/quotes?category=' + option, true);
    xhr.setRequestHeader('X-Api-Key', apiKey);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // معالجة الاستجابة
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText); // تحويل النص إلى JSON
            if (data.length > 0) {
                quote.innerHTML = data[0].quote;
                author.innerHTML = data[0].author;
            } else {
                quote.innerHTML = "No quotes found for this category.";
                author.innerHTML = "";
            }
        } else {
            quote.innerHTML = "Failed to fetch data. Status: " + xhr.status;
            author.innerHTML = "";
        }
    };

    // معالجة الأخطاء
    xhr.onerror = function () {
        quote.innerHTML = "An error occurred during the request.";
        author.innerHTML = "";
    };

    // إرسال الطلب
    xhr.send();
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" +quote.innerHTML  ,"Tweet Window","width=600, height=300" )
}