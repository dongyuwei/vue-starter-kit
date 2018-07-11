import foo, { foo2, data} from './foo';

export default function(){
    console.log('foo(1, 2)', foo(1, 2));

    console.log('foo2', foo2);
    console.log('data', data);
}


