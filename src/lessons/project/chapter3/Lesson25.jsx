import _ from 'lodash';

const Lesson25 = (props) => {
    const person = {
        name: 'abc',
        address: {
            city: 'hn',
            country: 'vn'
        },
        job: {
            title: 'dev',
            detail: {
                position: 'boss',
                salary: '5k'
            }
        }
    }
    //let copiedPerson = _.clone(person); // shallow copy, chi copy duoc level 1
    let copiedPerson = _.cloneDeep(person); // deep copy, ko hieu qua voi object qua lon
    copiedPerson.job.title = 'leader';
    copiedPerson.name = 'Nghi Phan';
    console.log('person: ', person, 'clone:', copiedPerson);

    return (
        <div>
            Lesson 25;
        </div>
    )
}

export default Lesson25;