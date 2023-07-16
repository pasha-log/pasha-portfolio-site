import React, { createContext, useState, ReactNode } from 'react';

export type ActiveLinkContextType = {
	activeLinkId: string
	setActiveLinkId: (a: string) => void
}

export const NavContext = createContext<ActiveLinkContextType>({
	activeLinkId: "",
	setActiveLinkId: () => {}
});

interface Props {
	children: ReactNode;
}

const NavProvider:  React.FC<Props> = ({ children }) => {
	const [ activeLinkId, setActiveLinkId ] = useState<string>('');

	const providerValue = {
		activeLinkId,
		setActiveLinkId
	};

	return <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>;
};

export default NavProvider;
