<script>
  $(document).ready(function() {
    $(".wordToCopy").on("click", function() {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(this).text()).select();
      document.execCommand("copy");
      $temp.remove();
      /*alert("تم نسخ الكلمة: " + $(this).text());*/
    });
  });
  
      const activeColor = "yellow"; // اختر لون التفعيل
      

// تحديد جميع العناصر القابلة للنقر في المستند
        const clickableTextElements = document.querySelectorAll(".wordToCopy");
        
        // تطبيق الحدث لكل نص قابل للنقر
        clickableTextElements.forEach((element) => {
          element.addEventListener("click", () => {
            // إعادة تعيين ألوان جميع العناصر النصية القابلة للنقر
            clickableTextElements.forEach((el) => {
              el.style.color = "";
           });
        
            // تغيير لون النص المنقر عليه
            element.style.color = activeColor;
          });
        });
</script>
