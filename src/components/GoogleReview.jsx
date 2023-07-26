import React, {useEffect} from "react";
{/* <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-36767a7b-a9ca-4df0-b20d-e01c0bd58d36"></div> */}


const GoogleReview = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{
        padding:"50px",
        maxWidth:"1500px",
        marginTop:"60px"
    }}>
    <div className="elfsight-app-36767a7b-a9ca-4df0-b20d-e01c0bd58d36">
      {/* Your ElfSight content will be rendered here */}
    </div>
    </div>
  );
};

export default GoogleReview;
