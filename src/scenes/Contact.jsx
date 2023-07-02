import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import useNav from '../hooks/useNav';

const Contact = () => {
	const contactRef = useNav('03 Contact');
	const { register, trigger, formState: { errors } } = useForm();

	const onSubmit = async (e) => {
		console.log('~ e', e);
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section ref={contactRef} id="03 contact" className="contact py-24 bg-black px-8">
			{/* HEADINGS */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: 50 },
					visible: { opacity: 1, x: 0 }
				}}
				className="flex md:justify-end w-full"
			>
				<div>
					<p className="font-semibold text-4xl text-red">
						<span className="text-white">CONTACT ME</span> IF YOU WANT TO CODE
					</p>
				</div>
			</motion.div>

			{/* FORM & IMAGE */}
			<div className="md:flex md:justify-between gap-16 mt-5">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 }
					}}
					className="basis-1/2 flex justify-center"
				>
					<iframe
						src="https://giphy.com/embed/xT0GqimU9dTwmE5lra"
						width="480"
						height="480"
						className="giphy-embed"
						allowFullScreen
						title="explosion"
					/>
					{/* <div className="bg-arnold place-self-center w-[35rem] h-[24rem] bg-contain md:w-auto md:h-[35rem] md:place-self-auto bg-center bg-no-repeat " /> */}
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 }
					}}
					className="basis-1/2 mt-10 md:mt-0"
				>
					<form
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.co/51c68da1c702e6b01fa9cf69c0949cd7"
						method="POST"
						className="text-center"
					>
						<input
							className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
							type="text"
							placeholder="NAME"
							{...register('name', {
								required: true,
								maxLength: 100
							})}
						/>
						{errors.name && (
							<p className="text-red mt-1">
								{errors.name.type === 'required' && 'This field is required.'}
								{errors.name.type === 'maxLength' && 'Max length is 100 char.'}
							</p>
						)}

						<input
							className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
							type="text"
							placeholder="EMAIL"
							{...register('email', {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
							})}
						/>
						{errors.email && (
							<p className="text-red mt-1">
								{errors.email.type === 'required' && 'This field is required.'}
								{errors.email.type === 'pattern' && 'Invalid email address.'}
							</p>
						)}

						<textarea
							className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
							name="message"
							placeholder="MESSAGE"
							rows="4"
							cols="50"
							{...register('message', {
								required: true,
								maxLength: 2000
							})}
						/>
						{errors.message && (
							<p className="text-red mt-1">
								{errors.message.type === 'required' && 'This field is required.'}
								{errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
							</p>
						)}

						<button
							className="p-5 bg-red font-semibold text-white mt-5 hover:bg-black hover:text-white transition duration-500"
							type="submit"
						>
							SEND ME A MESSAGE
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
