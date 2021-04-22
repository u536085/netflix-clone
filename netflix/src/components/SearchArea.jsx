import React from 'react';

const SearchArea = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-filed">
              <input id="textcolor" placeholder="zoek Film/Serie" type="text" onChange={props.handleChange}/>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default SearchArea;
