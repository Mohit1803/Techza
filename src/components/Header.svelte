<script>
	import Cards from './Cards.svelte';
	import Plans from './Plans.svelte';
	import Icon from '@iconify/svelte';
	import img1 from '../images/img-1.png';
	import img2 from "../images/img-2.jpg"
	import img3 from '../images/img-3.png';
	import img4 from '../images/c_icon01.png';
	import img5 from '../images/c_icon02.png';
	import img6 from '../images/c_icon03.png';
	import img7 from '../images/img28.png';
	import check1 from '../images/check1.png';
	import darklogo from '../images/dark-logo.png';
	import team1 from '../images/team1.png';
	import team2 from '../images/team2.png';
	import team3 from '../images/team3.png';
	import team4 from '../images/team4.png';
	import team5 from '../images/team5.png';
	import team6 from '../images/team6.png';
	import Tesitinomials from './Tesitinomials.svelte';
	import BlogCards from './BlogCards.svelte';
</script>

<section class="mx-auto items-center justify-center">
	<div class="relative w-full h-full">
		<div class="">
			<img src={img2} alt="image2" class="w-full h-fit bg-cover bg-center bg-no-repeat" />
		</div>

		<div class="absolute top-0 left-0 w-full h-full bg-[#002699] bg-opacity-90" />

		<div class="">
			<div class="flex flex-row md:gap-20 p-28 absolute top-0  text-white">
				<div class="flex flex-col mr-24">
					<span class="text-xl font-bold font-cabin mb-5">IT solutions for the new era </span>

					<div class="text-7xl font-bold font-cabin mt-5 ">
						<span>Advanced IT</span>
						<span>solutions for the</span>
						<span>next generation</span>
					</div>

					<span class="text-xl font-Inter text-left">
						<br />
						We implement a reliable network. A reliable network is important for a small business because
						it helps keep the business well organized.</span
					>

					<div class="realtive block mt-12">
						<a href="https://favdevs.com/demos/wp/techza/contact/">
							<button
								class="bg-white text-[#002699] hover:bg-[#010E37] hover:text-white rounded-full p-4"
							>
								<span class="p-8 font-semibold text-lg">Learn More</span>
							</button>
						</a>
					</div>
				</div>

				<div class="">
					<img src={img1} alt="img1" class="h-full w-full" />
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto items-center justify-center">
	<div class="grid md:grid-cols-2 gap-28 p-28 lg:py-28 lg:px-20 items-center justify-center">
		<div >
			<img src={img3} alt="image3" class="items-center justify-center w-full h-full" />
		</div>

		<div>
			<span class="text-base text-[#002699] font-Inter font-bold">About our company </span>

			<div class="text-6xl font-bold mt-5">
				<span class="font-cabin text-[#010E37]">We're the world's best IT solutions company</span>
			</div>

			<div class="font-Inter text-lg text-[#343E5F]">
				<p>
					<br />
					We have been helping businesses with their IT needs since 2010. We are provide fast, reliable,
					outsourced onsite and remote IT support services
				</p>
				<br />
				<p>
					During this time, we’ve built a reputation for excellent clients satisfaction as evidenced
					by our returning clients year after year, while our business growth has primarily come
					from our referrals.
				</p>
			</div>

			<div class="realtive block mt-12">
				<a href="https://favdevs.com/demos/wp/techza/contact/">
					<button
						class="text-white bg-[#002699] hover:bg-[#010E37] hover:text-white rounded-full p-4"
					>
						<span class="p-8 font-semibold text-lg">Learn More</span>
					</button>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto bg-[#010E37] relative block">
	<div class="flex flex-row gap-56 justify-center items-center p-20">
		<div class="flex flex-col  gap-5">
			<div class="text-[#1268FB] text-base font-Inter font-bold">
				<h4>Fun facts about our company</h4>
			</div>

			<div class="text-white font-cabin text-7xl font-bold flex">
				<h2>Numbers speak</h2>
			</div>
		</div>

		<div>
			<div class="flex flex-row gap-20 lg:gap-16">
				<div class="flex flex-col items-center justify-center gap-3">
					<div class="flex items-center justify-center">
						<img src={img4} alt="image4" class="h-8 w-10" />
					</div>

					<div class="flex justify-center">
						<h2 class="text-white text-7xl font-cabin font-bold">
							<span class="">100</span>+
						</h2>
					</div>

					<div>
						<span class="text-white font-Inter text-lg font-normal">Creative Members</span>
					</div>
				</div>

				<div class="flex flex-col gap-3">
					<div class="flex items-center justify-center">
						<img src={img5} alt="image4" class="h-8 w-10" />
					</div>

					<div class="flex justify-center">
						<h2 class="text-white text-7xl font-cabin font-bold">
							<span class="">73</span>K
						</h2>
					</div>

					<div>
						<span class="text-white font-Inter text-lg font-normal">Successful Projects</span>
					</div>
				</div>

				<div class="flex flex-col gap-3">
					<div class="flex items-center justify-center">
						<img src={img6} alt="image4" class="h-8 w-10" />
					</div>

					<div class="flex justify-center">
						<h2 class="text-white text-7xl font-cabin font-bold">
							<span class="">28</span>+
						</h2>
					</div>

					<div>
						<span class="text-white font-Inter text-lg font-normal">Award Won</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto p-28">
	<div class="flex flex-col gap-14">
		<div class="flex flex-col gap-5 justify-center items-center text-center mx-64">
			<div>
				<span class="text-base font-Inter font-bold text-[#002699]"> Our latest services </span>
			</div>

			<div>
				<h2 class="text-[#010E37] text-7xl font-cabin font-bold">
					Services that help keep your organization secure
				</h2>
			</div>

			<div>
				<p class="text-center text-[#343E5F] font-Inter text-lg font-normal leading-7">
					We are pioneers of the digital approach, using leading-edge technology to simplify
					procedures and apply executive for your business
				</p>
			</div>
		</div>

		<Cards />
	</div>
</section>

<section class="mx-auto px-28 pb-[120px]">
	<div class="grid grid-cols-2 gap-44">
		<div class="flex flex-col divide-y my-10">
			<div>
				<div class="flex flex-col gap-6">
					<span class="font-Inter text-[#002699] text-base font-bold">Why choose us</span>

					<span class="font-cabin text-[#010E37] text-7xl font-bold">
						We promise high quality IT services
					</span>
				</div>

				<div class="mt-6">
					<p class="font-Inter text-[#343E5F] text-lg font-normal leading-7">
						Supporting the growth of our clients is a fundamental reason why our IT Services is the
						chosen Austin IT partner for many
					</p>
				</div>
			</div>

			<!-- <div class="flex flex-row" /> -->
		</div>

		<div class="grid items-center justify-center">
			<img src={img7} alt="image7" />
		</div>
	</div>
</section>

<section class="bg-[#F7F7F9] p-28">
	<div class="flex flex-col gap-24">
		<div class="flex flex-col gap-6 items-center justify-center text-center mx-72">
			<span class="font-Inter text-[#002699] text-base font-bold">Our work process</span>

			<span class="font-cabin text-[#010E37] text-7xl font-bold"
				>We follow a simple work process for work</span
			>
		</div>

		<div class="flex flex-row gap-10">
			<div
				class="flex flex-col gap-6 px-7 pt-7 pb-6 text-center items-center rounded-lg justify-center hover:bg-white"
			>
				<div
					class="h-[60px] w-[60px] border border-solid border-[#E1E1E1] rounded-full bg-[#002699] text-white text-3xl font-cabin font-bold leading-[60px] text-center"
				>
					1
				</div>

				<div class="flex flex-col gap-3 items-center justify-center text-center w-60">
					<div>
						<span class="text-[#010E37] font-cabin text-3xl font-bold block">Choose a service</span>
					</div>

					<p class="text-[#343E5F] font-Inter text-lg leading-7">
						Great service providers listen first, listen and well
					</p>
				</div>
			</div>

			<div
				class="flex flex-col gap-6 px-7 pt-7 pb-6 text-center items-center rounded-lg justify-center hover:bg-white"
			>
				<div
					class="h-[60px] w-[60px] border border-solid border-[#E1E1E1] rounded-full hover:bg-[#002699] hover:text-white text-[#1268FB] text-3xl font-cabin font-bold leading-[60px] text-center"
				>
					2
				</div>

				<div class="flex flex-col gap-3 items-center justify-center text-center w-60">
					<div>
						<span class="text-[#010E37] font-cabin text-3xl font-bold block">Choose a service</span>
					</div>

					<p class="text-[#343E5F] font-Inter text-lg leading-7">
						Feel free to prefer another time and location for you
					</p>
				</div>
			</div>

			<div
				class="flex flex-col gap-6 px-7 pt-7 pb-6 text-center items-center rounded-lg justify-center hover:bg-white"
			>
				<div
					class="h-[60px] w-[60px] border border-solid border-[#E1E1E1] rounded-full hover:bg-[#002699] hover:text-white text-[#1268FB] text-3xl font-cabin font-bold leading-[60px] text-center"
				>
					3
				</div>

				<div class="flex flex-col gap-3 items-center justify-center text-center w-60">
					<div>
						<span class="text-[#010E37] font-cabin text-3xl font-bold block">Choose a service</span>
					</div>

					<p class="text-[#343E5F] font-Inter text-lg leading-7">
						Purchasing a custom drawn home plan ensures you get
					</p>
				</div>
			</div>

			<div
				class="flex flex-col gap-6 px-7 pt-7 pb-6 text-center items-center rounded-lg justify-center hover:bg-white"
			>
				<div
					class="h-[60px] w-[60px] border border-solid border-[#E1E1E1] rounded-full hover:bg-[#002699] hover:text-white text-[#1268FB] text-3xl font-cabin font-bold leading-[60px] text-center"
				>
					4
				</div>

				<div class="flex flex-col gap-3 items-center justify-center text-center w-64">
					<div>
						<span class="text-[#010E37] font-cabin text-3xl font-bold block">Choose a service</span>
					</div>

					<p class="text-[#343E5F] font-Inter text-lg leading-7">
						Successfully done a project most popular phrase service
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto">
	<div class="grid grid-cols-2 gap-8 p-28 items-center justify-center">
		<div class="flex flex-col gap-10">
			<div class="flex flex-col gap-6">
				<span class="text-base text-[#002699] font-Inter font-bold">Our creative team </span>

				<div class="flex flex-col gap-6">
					<span class="font-cabin text-[#010E37] text-7xl font-bold"
						>Meet members of our creative team
					</span>

					<p class="font-Inter text-lg text-[#343E5F]">
						We work to create the most attractive & meaningful place for small businesses. Our Team
						always ready to help you.
					</p>
				</div>
			</div>

			<div class="flex flex-col gap-3">
				<div class="flex flex-row items-center">
					<img src={check1} alt="done" class="h-fit w-fit" />

					<span class="font-cabin text-2xl font-bold text-[#010E37] pl-[10px]"
						>A team consisting of skilled members</span
					>
				</div>

				<div class="flex flex-row items-center">
					<img src={check1} alt="done" class="h-fit w-fit" />

					<span class="font-cabin text-2xl font-bold text-[#010E37] pl-[10px]"
						>Ready to help you 24/7 support</span
					>
				</div>
			</div>

			<div class="realtive block mt-2">
				<a href="https://favdevs.com/demos/wp/techza/our-team/">
					<button
						class="text-white bg-[#002699] hover:bg-[#010E37] hover:text-white rounded-full p-4"
					>
						<span class="p-2 font-semibold text-lg">View All Members</span>
					</button>
				</a>
			</div>
		</div>

		<div class="grid grid-cols-3 gap-6 items-center justify-center">
			<div class="flex flex-col gap-6 items-center justify-center">
				<div>
					<img src={team1} alt="team1" class="rounded-full h-[196px] w-[196px]" />
				</div>

				<div class="flex flex-col items-center justify-center text-center">
					<span class="text-[#010E37] text-2xl font-cabin font-bold mb-1 block">Arlene McCoy</span>
					<p class="text-[#343E5F] font-Inter text-lg leading-6">CEO @ Company</p>
				</div>
			</div>

			<div class="flex flex-col gap-6 items-center justify-center">
				<div>
					<img src={team2} alt="team1" class="rounded-full h-[196px] w-[196px]" />
				</div>

				<div class="flex flex-col items-center justify-center text-center">
					<span class="text-[#010E37] text-2xl font-cabin font-bold mb-1 block">Theresa Webb </span>
					<p class="text-[#343E5F] font-Inter text-lg leading-6">Project Manager</p>
				</div>
			</div>

			<div class="flex flex-col gap-6 items-center justify-center">
				<div>
					<img src={team3} alt="team1" class="rounded-full h-[196px] w-[196px]" />
				</div>

				<div class="flex flex-col items-center justify-center text-center">
					<span class="text-[#010E37] text-2xl font-cabin font-bold mb-1 block">Floyd Miles</span>
					<p class="text-[#343E5F] font-Inter text-lg leading-6">SEO Manager</p>
				</div>
			</div>

			<div class="flex flex-col gap-6 items-center justify-center">
				<div>
					<img src={team4} alt="team1" class="rounded-full h-[196px] w-[196px]" />
				</div>

				<div class="flex flex-col items-center justify-center text-center">
					<span class="text-[#010E37] text-2xl font-cabin font-bold mb-1 block"
						>Darlene Robertson
					</span>
					<p class="text-[#343E5F] font-Inter text-lg leading-6">Web Developer</p>
				</div>
			</div>

			<div class="flex flex-col gap-6 items-center justify-center">
				<div>
					<img src={team5} alt="team1" class="rounded-full h-[196px] w-[196px]" />
				</div>

				<div class="flex flex-col items-center justify-center text-center">
					<span class="text-[#010E37] text-2xl font-cabin font-bold mb-1 block"
						>Bessie Cooper
					</span>
					<p class="text-[#343E5F] font-Inter text-lg leading-6">Product Designer</p>
				</div>
			</div>

			<div class="flex flex-col gap-6 items-center justify-center">
				<div>
					<img src={team6} alt="team1" class="rounded-full h-[196px] w-[196px]" />
				</div>

				<div class="flex flex-col items-center justify-center text-center">
					<span class="text-[#010E37] text-2xl font-cabin font-bold mb-1 block">Jerome Bell</span>
					<p class="text-[#343E5F] font-Inter text-lg leading-6">HTML Developer</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="mx-auto px-28">
	<div class="flex flex-col gap-14">
		<div class="flex flex-col gap-5 max-w-3xl mx-auto">
			<div class="flex items-center justify-center text-center">
				<span class="text-base font-Inter font-bold text-[#002699]"> Choose your best plan </span>
			</div>

			<div class="items-center justify-center text-center">
				<h2 class="text-[#010E37] text-7xl font-cabin font-bold">
					We provide simple pricing plans for you
				</h2>
			</div>
		</div>

		<div class="grid grid-cols-3 gap-6">
			<Plans />
		</div>
	</div>
</section>

<section class="mx-auto px-28 bg-[#F7F7F9] p-28">
	<div class="flex flex-col gap-24">
		<div class="flex flex-col gap-5 max-w-3xl mx-auto">
			<div class="flex items-center justify-center text-center">
				<span class="text-base font-Inter font-bold text-[#002699]"> Testinomials </span>
			</div>

			<div class="items-center justify-center text-center mx-auto">
				<h2 class="text-[#010E37] text-7xl font-cabin font-bold">
					See what people are saying about us
				</h2>
			</div>
		</div>

		<div class="grid grid-cols-3 gap-6">
			<Tesitinomials />
		</div>
	</div>
</section>

<section class="mx-auto px-28 p-28">
	<div class="flex flex-col gap-24">
		<div class="flex flex-col gap-5 max-w-3xl mx-auto">
			<div class="flex items-center justify-center text-center">
				<span class="text-base font-Inter font-bold text-[#002699]"> Our latest news </span>
			</div>

			<div class="items-center justify-center text-center mx-auto">
				<h2 class="text-[#010E37] text-7xl font-cabin font-bold">
					Discover our latest articles and insights
				</h2>
			</div>
		</div>

		<div class="grid grid-cols-3 gap-6">
			<BlogCards />
		</div>
	</div>
</section>

<section class="mx-auto bg-[#010E37] relative block">
	<div class="flex flex-col gap-14 px-96 items-center justify-center mx-auto p-20">
		<div class="flex flex-col gap-6 items-center justify-center text-center">
			<span class="text-[#1268FB] text-base font-Inter font-bold">Subscribe Newsletters</span>

			<span class="text-white font-cabin text-7xl font-bold flex"
				>Looking for the best IT business solutions?</span
			>
		</div>

		<div class="flex felx-row border-2 border-solid border-white rounded-[50px] w-full">
			<input
				size="40"
				aria-required="true"
				aria-invalid="true"
				placeholder="Enter your email address..."
				value=""
				type="email"
				name="your-email"
				class="p-5"
			/>
			<input
				type="submit"
				value="Subscribe"
				class="absolute font-Inter text-white text-lg font-semibold bg-[#002699] w-40 h-[50px] rounded-[50px]"
			/>
		</div>
	</div>
</section>

<section class="mx-auto p-28">

	<div class="flex flex-col">
		<div class="flex flex-col">
			<div class="flex flex-row gap-6 w-full items-center justify-center">
				<a href="https://favdevs.com/demos/wp/techza/tel:123">
					<div class="flex flex-row items-center gap-4 bg-[#F7F7F9] p-5 pr-24 w-full rounded-xl">
						<Icon icon="el:phone-alt" color="#1268FB" class="w-[50px] h-[50px]" />
	
						<div class="flex flex-col">
							<span class="mb-[10px] font-normal font-Inter text-lg hover:text-[#010E37CC]"
								>Call for a consultation now!</span
							>
							<p class="font-cabin font-bold text-2xl">(123) 246-0888</p>
						</div>
					</div>
				</a>
	
				<a href="name@email.com">
					<div class="flex flex-row items-center gap-4 bg-[#F7F7F9] p-5 pr-24 w-full rounded-xl">
						<Icon icon="el:phone-alt" color="#1268FB" class="w-[50px] h-[50px]" />
	
						<div class="flex flex-col">
							<span class="mb-[10px] font-normal font-Inter text-lg hover:text-[#010E37CC]"
								>Write to us</span
							>
	
							<p class="font-cabin font-bold text-2xl">example@gmail.com</p>
						</div>
					</div>
				</a>
	
				<a href="">
					<div class="flex flex-row items-center gap-4 bg-[#F7F7F9] p-5 pr-16 w-full rounded-xl">
						<Icon icon="el:phone-alt" color="#1268FB" class="w-[50px] h-[50px]" />
	
						<div class="flex flex-col">
							<span class="mb-[10px] font-normal font-Inter text-lg hover:text-[#010E37CC]"
								>Address</span
							>
							<p class="font-cabin font-bold text-2xl">Howard Street, 13126 USA</p>
						</div>
					</div>
				</a>
			</div>
	
			<div class="flex flex-row py-20 items-start justify-start">
				<div class="flex flex-col mr-[100px] max-w-md px-3">
					<div class="flex flex-col items-start justify-start">
						<div class="mb-[30px]">
							<a href="https://favdevs.com/demos/wp/techza">
								<span class="inline-block max-w-[115px]">
									<img src={darklogo} alt="" />
								</span>
							</a>
						</div>
	
						<p class="font-Inter font-normal text-lg text-[#343E5F] mb-4">
							We are a digital acceleration specialist and specializing in robust end-to-end delivery
							of tailor-made technology solutions with best innovative, scalable and competitive
							results.
						</p>
					</div>
	
					<div class="flex flex-row gap-4">
						<a href="https://twitter.com/">
							<div
								class="flex w-[30px] h-[30px] bg-[#010E371A] items-center justify-center rounded-full"
							>
								<Icon icon="prime:twitter" color="#010E37" class="text-lg" />
							</div>
						</a>
	
						<a href="https://www.facebook.com/">
							<div
								class="flex w-[30px] h-[30px] bg-[#010E371A] items-center justify-center rounded-full"
							>
								<Icon icon="bxl:facebook" color="#010E37" class="text-lg" />
							</div>
						</a>
	
						<a href="https://instagram.com/">
							<div
								class="flex w-[30px] h-[30px] bg-[#010E371A] items-center justify-center rounded-full"
							>
								<Icon icon="iconoir:instagram" color="#010E37" class="text-lg" />
							</div>
						</a>
	
						<a href="https://github.com/">
							<div
								class="flex w-[30px] h-[30px] bg-[#010E371A] items-center justify-center rounded-full"
							>
								<Icon icon="mdi:github" color="#010E37" class="text-lg" />
							</div>
						</a>
					</div>
				</div>
	
				<div class="grid grid-cols-3 gap-28 items-start justify-start">
					<div class="flex flex-col">
						<span class="text-2xl font-cabin font-bold text-[#010E37] mb-5">Quick Link</span>
	
						<div class="flex flex-col mt-[5px] text-left">
							<a href="#">
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">Demos</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">About Us</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">Services</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">Pages</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">Contact</p>
							</a>
						</div>
					</div>
	
					<div class="flex flex-col">
						<span class="text-2xl font-cabin font-bold text-[#010E37] mb-5">Utility Pages</span>
	
						<div class="flex flex-col mt-[5px] text-left">
							<a href="#">
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">
									Instructions
								</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">
									Style guide
								</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">Licenses</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">
									404 Not found
								</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">
									Password protected
								</p>
							</a>
						</div>
					</div>
	
					<div class="flex flex-col">
						<span class="text-2xl font-cabin font-bold text-[#010E37] mb-5">Resources</span>
	
						<div class="flex flex-col mt-[5px] text-left">
							<a href="#">
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">Support</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">
									Privacy policy
								</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">
									Terms & Conditions
								</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">
									Strategic finance
								</p>
								<p class="text-lg text-[#343E5F] font-normal font-Inter pl-0 pb-[10px]">
									Video guide
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<section class="border-solid border-t-[1px] border-[#010E371A] pt-9 w-full relative">
			<div class="flex items-center justify-center max-w-[1320px] px-3 ">
				<span class="text-[#343E5F] font-Inter text-base font-normal">© Copyright 2023, All Rights Reserved by Mthemeus</span>
			</div>
		</section>
	</div>
	
</section>
