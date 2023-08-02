// Contador
        const countdownTimer = document.getElementById('countdown-timer');
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');

        const countdownDate = new Date('2023-08-30T00:00:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                daysElement.innerText = formatNumber(days);
                hoursElement.innerText = formatNumber(hours);
                minutesElement.innerText = formatNumber(minutes);
                secondsElement.innerText = formatNumber(seconds);
            } else {
                daysElement.innerText = '00';
                hoursElement.innerText = '00';
                minutesElement.innerText = '00';
                secondsElement.innerText = '00';
            }
        }

        function formatNumber(number) {
            return number < 10 ? '0' + number : number;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        // Cambiar el video del reproductor
        function changeVideo(videoUrl) {
            const youtubePlayer = document.getElementById('youtube-player');
            youtubePlayer.setAttribute('src', videoUrl);
        }