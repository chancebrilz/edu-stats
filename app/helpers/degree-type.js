import { helper } from '@ember/component/helper';

export function degreeType(type) {

    var toString;

    switch (type) {
        case 1:
            toString = "Predominantly certificate-degree granting";
            break;
        case 2:
            toString = "Predominantly associate's-degree granting";
            break;
        case 3:
            toString = "Predominantly bachelor's-degree granting";
            break;
        case 4:
            toString = "Entirely graduate-degree granting";
            break;
        default: // also case 0
            toString = "Not classified";
            break;
    }

    return toString;

}

export default helper(degreeType);
