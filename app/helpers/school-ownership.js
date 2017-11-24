import { helper } from '@ember/component/helper';

export function schoolOwnership(type) {

    switch (parseInt(type)) {
        case 1:
            return "Public";
            break;
        case 2:
            return "Private non-profit";
            break;
        case 3:
            return "Private for-profit";
            break;
        default:
            return "Not classified";
    }

}

export default helper(schoolOwnership);
