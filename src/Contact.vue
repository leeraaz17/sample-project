<template>
	<div>
		<h2>Contact Us</h2>
		<slot name="top">

		</slot>
		<form>
			<div class="form form-group">
				<label for="yourName"> Your Name </label>
				<input type="text" class="form-control" id="yourName" placeholder="Enter your name">
			</div>

			<div class="form form-group">
				<label for="yourName"> E-mail address </label>
				<input type="text" class="form-control" id="emailAddress" placeholder="Enter your email address">
			</div>
			<slot></slot>
			<div class="form form-group">
				<label for="yourName"> Message </label>
				<textarea cols="30" rows="10" class="form-control" id="message" placeholder="Enter your message" />
			</div> 

			<slot name="button">
				<p> We will respond within 2 business days. </p>
			</slot>

			<button type="submit" class="btn btn-default"> Send </button>
		</form>
	</div>
</template>

<script>
	export default {
		activated() {
			alert("Contact component activated.")
		},
		deactivated() {
			alert("Contact component deactivated.")
		}
	}
</script>