import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import { fetchShowWithName } from '../../services/filmsAPI';

export default function SearchBox({ onFormSubmit, setShows, value }) {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={async (values) => {
          const { name } = values;
          onFormSubmit(name);

          fetchShowWithName(name).then((shows) => setShows(shows));
        }}
      >
        <Form>
          <Field id="name" name="name" placeholder="Search" />

          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
// return <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />;

// export function a() {
//   return (
//     <div>
//       <Formik
//         initialValues={{
//           name: '',
//         }}
//         onSubmit={async (values) => {
//           onChange(values.name);
//         }}
//       >
//         <Form>
//           <Field id="name" name="name" placeholder="Search" />

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
