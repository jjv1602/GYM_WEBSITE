import Link from 'next/link';


const NotFound = () => {
	return (
		<section>
			<div className="container notFound__container">
				<h2> Page Not Found </h2>
				<Link href="/" className="btn">
					Go back Home
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
