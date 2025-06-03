 
      const canvas = document.getElementById("greetingCanvas");
      const ctx = canvas.getContext("2d");
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src =
        "https://raw.githubusercontent.com/hnouh/eid-greeting/main/Alesayi%20greeting.jpg"; //  صورة القالب
      image.onload = () =>
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      const audio = document.getElementById("takbeerat");
      let audioStarted = false;

      function startAudioOnce() {
        if (!audioStarted) {
          audio.play().catch(() => {});
          audioStarted = true;
          document.getElementById("muteBtn").innerText = "🔊";
        }
      }

      function generateCard() {
        const nameAr = document.getElementById("nameAr").value.trim();
        const nameEn = document.getElementById("nameEn").value.trim();

        // إعادة رسم الخلفية
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00000";
        ctx.textAlign = "center";
        // ctx.shadowColor = "#000";
        // ctx.shadowBlur = 4;

        // المسافة الرأسية السفلية من أسفل البطاقة
        let y = canvas.height - 350;

        if (nameAr) {
          ctx.font = "60px 'ArbFONTS-GE-Flow'"; // خط كبير يناسب الدقة العالية
          ctx.fillText(`${nameAr}`, canvas.width / 2, y);
          y += 75; // مسافة بين السطرين
        }

        if (nameEn) {
          ctx.font = "56px 'FuturaPT'";
          ctx.fillText(`${nameEn}`, canvas.width / 2, y);
        }
        const downloadLink = document.getElementById("downloadLink");
        downloadLink.href = canvas.toDataURL("image/png");
      }

      function toggleMute() {
        if (audio.paused) {
          audio.play().catch(() => {});
          document.getElementById("muteBtn").innerText = "🔊";
        } else {
          audio.pause();
          document.getElementById("muteBtn").innerText = "🔇";
        }
      }
      const nameArInput = document.getElementById("nameAr");
      const nameEnInput = document.getElementById("nameEn");
      const generateBtn = document.getElementById("generateBtn");

      function checkInputs() {
        const hasInput =
          nameArInput.value.trim() !== "" || nameEnInput.value.trim() !== "";
        generateBtn.disabled = !hasInput;
      }

      nameArInput.addEventListener("input", () => {
        startAudioOnce();
        checkInputs();
      });

      nameEnInput.addEventListener("input", () => {
        startAudioOnce();
        checkInputs();
      });

      // لمنع التحميل إذا لم يتم الإدخال
      function generateCard() {
        if (generateBtn.disabled) return;

        const nameAr = nameArInput.value.trim();
        const nameEn = nameEnInput.value.trim();

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";

        let y = canvas.height - 350;
        if (nameAr) {
          ctx.font = "60px 'ArbFONTS-GE-Flow'";
          ctx.fillText(nameAr, canvas.width / 2, y);
          y += 75;
        }
        if (nameEn) {
          ctx.font = "56px 'FuturaPT'";
          ctx.fillText(nameEn, canvas.width / 2, y);
        }

        const downloadLink = document.getElementById("downloadLink");
        downloadLink.href = canvas.toDataURL("image/png");
      } 