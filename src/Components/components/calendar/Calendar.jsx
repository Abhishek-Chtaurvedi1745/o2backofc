import React, { useEffect } from 'react';
import outSourcelogo from '../../../../public/Image/outsource2backoffice.png';

const ThankYouPage = () => {
    useEffect(() => {
        // Load Calendly widget script
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        head.appendChild(script);

        return () => {
            head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div className="container py-5">
                <div className="text-center">
                    <h1 className="display-4 fw-bold mb-2" style={{color:"#5e5e5e"}}>
                        Thank You for Reaching Out!
                    </h1>
                    <p className="lead mb-1">
                        You're one step closer to making a smart investment decision. ⭐
                    </p>
                    <p className="text-muted mb-2">
                        Before you go, let's take the final step together.
                    </p>
                    
                    <div className="my-4">
                        <h2 className="h2 mb-2" style={{color:"#5e5e5e"}}>
                            Choose the Perfect Time
                        </h2>
                        <p className="text-muted">
                            For your free consultation with one of our expert O2BO,<br />
                            and let's start turning your property dreams into reality!
                        </p>
                    </div>

                    {/* Calendly inline widget - updated */}
                    <div 
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/outsource2backoffice"
                        style={{ minWidth: '320px', height: '700px' }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;