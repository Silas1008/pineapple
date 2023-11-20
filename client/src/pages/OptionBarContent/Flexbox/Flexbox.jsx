import React from 'react';
import './Flexbox.scss';

const Flexbox = () => {
  return (
    <div className='flex-box'>
      <div className="paddingBlock">
        <h3>EQUAL HEIGHT COLUMNS</h3>
        <h6>Simply add display: flex to the parent</h6>
        <div className="equalHWrap eqWrap">
          <div className="equalH eq">boo <br/> boo</div>
          <div className="equalH eq">shoo</div>
          <div className="equalH eq">clue</div>
        </div>
      </div>

      <div className="paddingBlock">
        <h3>EQUAL HEIGHT + WIDTH COLUMNS</h3>
        <h6>Add display: flex to the parent and flex: 1 to the boxes</h6>
        <div className="equalHWrap eqWrap">
          <div className="equalHW eq">boo <br/> boo</div>
          <div className="equalHW eq">shoo</div>
          <div className="equalHW eq">clue</div>
        </div>
      </div>

      <div className="paddingBlock">
        <h3>EQUAL HEIGHT + WIDTH COLUMNS WITH MARGINS</h3>
        <h6>Add display: flex, justify-content: space-between to the parent and give a width to the boxes that totals to less than 100%. E.g. These boxes have a width of 32% each. The remaining width of 4% (i.e. 32 x 3 = 96%) will be used to create the space between the boxes and simulate margins. No need to remove margins on the first and last child!</h6>
        <div className="equalHMWrap eqWrap">
          <div className="equalHM eq">boo <br/> boo</div>
          <div className="equalHM eq">shoo</div>
          <div className="equalHM eq">clue</div>
        </div>
      </div>

      <div className="paddingBlock">
        <h3>EQUAL HEIGHT COLUMNS WITH MARGINS IN MULTIPLE ROWS</h3>
        <h6>Building on the above example, just give bottom margins to the boxes. Add a flex-wrap: wrap to the parent, so that boxes go to the next line when they run out of space in a 'row'.</h6>
        <div className="equalHMRWrap eqWrap">
          <div className="equalHMR eq">boo</div>
          <div className="equalHMR eq">shoo</div>
          <div className="equalHMR eq">clue</div>
          <div className="equalHMR eq">boo <br/> boo </div>
          <div className="equalHMR eq">shoo</div>
          <div className="equalHMR eq">clue</div>
        </div>
      </div>

      <div className="paddingBlock">
        <h3>EQUAL HEIGHT COLUMNS WITH MARGINS IN MULTIPLE ROWS and VARIABLE NO OF BOXES</h3>
        <h6>Add display: flex, flex-wrap: wrap to the parent and give a width to the boxes. Give margins to the boxes and remove the left and right margins of the first and last box in each 'row' using the nth-of-type selector. Unlike the previous example, justify-content: space-between on the parent does not work for an uneven number of boxes, because if there are five boxes in all, the third and fifth will align to the left and right of the perceived 'row'.</h6>
        <div className="equalHMVWrap eqWrap">
          <div className="equalHMV eq">boo <br/> boo</div>
          <div className="equalHMV eq">shoo</div>
          <div className="equalHMV eq">clue</div>
          <div className="equalHMV eq">boo <br/> boo </div>
          <div className="equalHMV eq">clue</div>
        </div>
      </div>
    </div>
  );
};

export default Flexbox;
