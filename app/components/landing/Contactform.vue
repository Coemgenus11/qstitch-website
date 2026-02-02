<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData);

    result.style.display = "block";
    result.classList.remove("text-green-500", "text-red-500");
    result.innerHTML = "Sending...";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        result.classList.add("text-green-500");
        result.innerHTML = data?.message || "Message sent successfully.";
        form.reset();
        form.classList.remove("was-validated");
      } else {
        result.classList.add("text-red-500");
        result.innerHTML =
          data?.message || "Failed to send message. Please try again.";
      }
    } catch (error) {
      console.log(error);
      result.classList.add("text-red-500");
      result.innerHTML = "Something went wrong!";
    }

    setTimeout(() => {
      result.style.display = "none";
    }, 5000);
  });
});
</script>


<template>
  <form
    id="form"
    class="needs-validation"
    novalidate
  >
    <input
      type="checkbox"
      class="hidden"
      style="display: none"
      name="botcheck"
    />

    <div class="mb-5">
      <input
        type="text"
        placeholder="Full Name"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="name"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please provide your full name.
      </div>
    </div>

    <div class="mb-5">
      <label for="email_address" class="sr-only">Email Address</label>
      <input
        id="email_address"
        type="email"
        placeholder="Email Address"
        name="email"
        required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        Please provide your email address.
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        Please provide a valid email address.
      </div>
    </div>

    <div class="mb-3">
      <textarea
        name="message"
        required
        placeholder="Your Message"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        Please enter your message.
      </div>
    </div>

    <LandingButton type="submit" size="lg" block>Send Message</LandingButton>
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>


<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
