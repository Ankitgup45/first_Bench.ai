import React from 'react';
import Header from './Header'; // Import the Header component
import resultImage from './result.png'; // Import the result image
import con_3 from './con_3.png';
import con_11 from './con_11.png';
import con_12 from './con_12.png';
import con_6 from './con_6.png';
import con_8 from './con_8.png';
import con_9 from './con_9.png';
import con_10 from './con_10.png';
import './App.css'; // Import the CSS file for styling

function NestedContainers() {
  return (
    <div className="nested-container">
      {/* Container 3 */}
      <div className="nested-container-item container-3">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={con_3}
            alt="Result"
            style={{ width: 'auto', height: 'auto', marginBottom: '20px' }}
          />
        </div>
      </div>

      {/* Container 7 */}
      <div className="nested-container-item container-7">
        <h3>Revisit Paper</h3>
        <p style={{ fontSize: '15px' }}>
          Challenge your friends by simply sharing a link to this test
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
          <button
            style={{
              backgroundColor: 'blueviolet',
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              width: '200px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
            }}
          >
            Visit
          </button>
        </div>
        <div
          style={{
            marginTop: '10px',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span>ℹ️</span>
          <span style={{ fontSize: '15px', marginLeft: '5px' }}>
            Instructions for how to upload your handwritten material are given.
          </span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main className="mainContent">
        {/* Left side container */}
        <section className="container container-1">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={resultImage}
              alt="Result"
              style={{ width: '30%', height: '30%', marginBottom: '20px' }}
            />
          </div>
          <h2 style={{ color: 'red', textAlign: 'center' }}>Your Result!</h2>
          <p>All your insights & details in one place</p>
          <NestedContainers />
        </section>

        {/* Right side containers arranged in a grid */}
        <div className="right-containers">
          {/* First Row */}
          <div className="row">
            <section className="container container-2">
              <p style={{color: "grey"}}>▼ Compare Accuracy</p>
            </section>
            <section className="container container-4">
              <p style={{color: "grey"}}>▼ Compare Accuracy</p>
            </section>
            <section className="container container-5">
              <p style={{color: "grey"}}>▼ Compare Accuracy</p>
            </section>
          </div>

          {/* Second Row */}
          <div className="row">
            <section className="container container-6">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={con_6}
                  alt="Result"
                  style={{ width: '300%',  marginBottom: '20px' }}
                />
              </div>
             
            </section>
            <section className="container container-8">
             
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={con_8}
                  alt="Result"
                  style={{ width: '300%',  marginBottom: '20px' }}
                />
              </div>
              
            </section>
            <section className="container container-9">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={con_9}
                  alt="Result"
                  style={{ width: '300%',  marginBottom: '20px' }}
                />
              </div>
            </section>
            <section className="container container-10">
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={con_10}
                  alt="Result"
                  style={{ width: '300%',  marginBottom: '20px' }}
                />
              </div>
            </section>
          </div>

          {/* Third Row */}
          <div className="row">
            <section className="container container-11">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={con_11}
                  alt="Result"
                  style={{ width: '300%', height: '30%', marginBottom: '20px' }}
                />
              </div>
            </section>
            <section className="container container-12">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={con_12}
                  alt="Result"
                  style={{ width: '300%',  marginBottom: '20px' }}
                />
              </div>
              
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
