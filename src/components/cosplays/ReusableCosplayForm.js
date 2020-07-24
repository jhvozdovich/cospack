import React from "react";
import PropTypes from "prop-types";

function ReusableCosplayForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="character"
          placeholder="Character" />
        <input
          type="text"
          name="series"
          placeholder="Series" />
        <div class="form-group">
          <label for="startDate">Start Date</label>
          <input id="startDate" class="form-control" type="date" />
        </div>
        <div class="form-group">
          <label for="dueDate">Start Date</label>
          <input id="dueDate" class="form-control" type="date" />
        </div>
        {/* PHOTO UPLOAD */}
        <textarea
          name="notes"
          placeholder="Notes" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableCosplayForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableCosplayForm;