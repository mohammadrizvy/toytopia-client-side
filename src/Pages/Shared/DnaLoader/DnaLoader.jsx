import React from 'react';
import { Dna } from "react-loader-spinner";

const DnaLoader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Dna
          visible={true}
          height={80}
          width={80}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClassName="dna-wrapper"
        />
      </div>
    );
};

export default DnaLoader;