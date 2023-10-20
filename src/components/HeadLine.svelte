<script>
	import Icon from '@iconify/svelte';
</script>

<header class="mx-auto md:bg-[#010E37] md:p-4 md:px-28 lg:px-16 lg:p-4">
	<div class="flex flex-row gap-10 text-white">
		<div class="flex flex-row gap-96">
			<div class="flex md:gap-5 lg:gap-4">
				<div>
					<li class="flex flex-row gap-1 justify-center items-center"> 
						<Icon icon="mdi-location" class="text-xl"/>
						<span class="font-Inter text-base font-semibold">Howard Street, NY 13126 USA</span>
					</li>
				</div>

					<div>
						<span>|</span>
					</div>

				<div>
					<li class="flex flex-row gap-2 justify-center items-center">
						<Icon icon="mdi:email-open" class="text-xl" />
						<a href="mailto:name@email.com" class="font-Inter text-base font-semibold">example@gmail.com</a>
					</li>
				</div>
			</div>

			<div class="flex gap-5">
				<li class="flex flex-row gap-2 justify-center items-center">
					<Icon icon="mdi:clock" class="text-xl" />
					<span class="font-Inter text-base font-semibold">Office Hours: 8:00 AM – 10:00 PM</span>
				</li>
			</div>
		</div>

		<div class="flex flex-row gap-2 justify-center items-center">
			<div class="flex">
				<a href="https://www.facebook.com/">
					<span>
						<Icon icon="eva:facebook-fill" color="white" class="text-xl" />
					</span>
				</a>
			</div>

			<div class="flex">
				<a href="https://www.facebook.com/">
					<span>
						<Icon icon="formkit:linkedin" color="white" class="text-xl"/>
					</span>
				</a>
			</div>

			<div class="flex">
				<a href="https://www.facebook.com/">
					<span>
						<Icon icon="prime:twitter" color="white" class="text-xl"/>
					</span>
				</a>
			</div>
		</div>
	</div>
</header>
