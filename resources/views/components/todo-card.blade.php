<div class="form-check">
    <input class="form-check-input" onchange="toggleUnderline()" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" id="labelCheck" for="flexCheckDefault">
        {{ $slot }}
    </label>
</div>



<script>
    function toggleUnderline() {
        const checkbox = document.getElementById("flexCheckDefault")
        const label = document.getElementById("labelCheck")

        if (checkbox.checked) {
            label.classList.add("text-decoration-line-through")
        } else {
            label.classList.remove("text-decoration-line-through")
        }
    }
</script>
