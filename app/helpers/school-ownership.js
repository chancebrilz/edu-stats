import { helper } from '@ember/component/helper';

export function schoolOwnership(type) {

    var toString;

    switch (type) {
        case 1:
            toString = "Public";
            break;
        case 2:
            toString = "Private non-profit";
            break;
        case 3:
            toString = "Private for-profit";
            break;
        default:
            toString = "Not classified";
            break;
    }

    return toString;

}

export default helper(schoolOwnership);
