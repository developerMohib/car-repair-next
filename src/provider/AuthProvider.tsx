import React from 'react';

const AuthProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;