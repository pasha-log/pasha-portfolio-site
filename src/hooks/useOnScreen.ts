import { useEffect, useState } from 'react';

const useOnScreen = (ref: any) => {
	const [ isOnScreen, setIsOnScreen ] = useState(false);

	const observer = new IntersectionObserver(
		([ entry ]) => {
			setIsOnScreen(entry.isIntersecting);
		},
		{
			threshold: 0.2
		}
	);

	useEffect(() => {
		observer.observe(ref.current);

		return () => observer.disconnect();
	});

	return isOnScreen;
};

export default useOnScreen;
