import { useContext, useEffect, useRef } from 'react';
import useOnScreen from './useOnScreen';
import { NavContext } from '../context/NavContext';

const useNav = (navLinkId: string) => {
	const ref = useRef<HTMLDivElement>(null!);
	const { setActiveLinkId } = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(
		() => {
			if (isOnScreen) {
				setActiveLinkId(navLinkId);
			}
		},
		[ isOnScreen, setActiveLinkId, navLinkId ]
	);

	return ref;
};

export default useNav;
