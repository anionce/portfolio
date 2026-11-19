export const TagSection = ({ heading, items }: { heading: string; items: string[] }) => (
	<section className='container section'>
		<h2>{heading}</h2>
		<div className='stack'>
			{items.map(item => (
				<span key={item}>{item}</span>
			))}
		</div>
	</section>
);
